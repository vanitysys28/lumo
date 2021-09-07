<script>
    import { cartitems } from "../stores/store.js";

    let subtotal;

    const increaseQuantity = (product) => {
        for (let cartitem of $cartitems) {
            if (cartitem.title === product.title) {
                product.quantity += 1;
                $cartitems = $cartitems;
            }
        }
    };
    const decreaseQuantity = (product) => {
        for (let cartitem of $cartitems) {
            if (cartitem.title === product.title) {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                    $cartitems = $cartitems;
                    return;
                } else {
                    $cartitems = $cartitems.filter(
                        (cartItem) => cartItem != product
                    );
                }
            }
        }
    };

    $: subtotal = $cartitems.reduce(
        (sum, cartitem) => sum + cartitem.price * cartitem.quantity,
        0
    );

    $: console.log($cartitems);
</script>

<section>
    <h2 class="title">Cart</h2>
    {#if $cartitems.length === 0}
        <h3 class="empty-cart">Cart is empty</h3>
    {:else}
        <div class="table">
            <div class="table-header">
                <div class="empty-first-col" />
                <div class="empty-second-col" />
                <h3 class="cart-header">Quantity</h3>
                <h3 class="cart-header">Total</h3>
            </div>
            <div class="separator">
                <div class="empty-first-col" />
                <div class="empty-second-col" />
                <div class="line" />
            </div>
            {#each $cartitems as cartitem}
                {#if cartitem.quantity > 0}
                    <div class="table-products">
                        <picture>
                        <source class="product-images"
                            type="image/webp"
                            srcset={cartitem.webp_featured_image}
                        />
                        <source class="product-images"
                            type="image/png"
                            srcset={cartitem.featured_image}
                        />
                        <img class="product-images" src={cartitem.featured_image} alt="" />
                    </picture>
                        <!-- <img
                            class="product-images"
                            src={cartitem.featured_image}
                            alt=""
                        /> -->
                        <div class="product-information">
                            <p class="product-title">{cartitem.title}</p>
                            <p class="product-variant">{cartitem.variant}</p>
                        </div>
                        <div class="quantity-selector-container">
                            <div class="quantity-selector">
                                <img
                                    src="/images/Cart/Less.svg"
                                    on:click={() => decreaseQuantity(cartitem)}
                                    alt=""
                                />
                                <p class="product-quantity">
                                    {cartitem.quantity}
                                </p>
                                <img
                                    src="/images/Cart/more.svg"
                                    on:click={() => increaseQuantity(cartitem)}
                                    alt=""
                                />
                            </div>
                        </div>
                        <p class="product-price">
                            {cartitem.quantity * cartitem.price}<span>€</span>
                        </p>
                    </div>
                {/if}
            {/each}
            <div class="separator">
                <div class="empty-first-col" />
                <div class="empty-second-col" />
                <div class="line" />
            </div>
            <div class="table-subtotal">
                <div class="empty-first-col" />
                <div class="empty-second-col" />
                <h3 class="subtotal-header">Subtotal</h3>
                <h3 class="subtotal">{subtotal}<span>€</span></h3>
            </div>
            <div class="table-checkout">
                <div class="empty-first-col" />
                <div class="empty-second-col" />
                <div class="empty-third-col" />
                <div class="button-container">
                    <button class="checkout">Checkout</button>
                </div>
            </div>
        </div>
    {/if}
</section>

<style>
    .title {
        text-transform: uppercase;
        text-align: center;
    }
    .table {
        display: flex;
        flex-direction: column;
    }
    .table-header {
        display: flex;
        justify-content: space-evenly;
    }
    .separator {
        display: flex;
        justify-content: space-evenly;
    }
    .line {
        width: 700px;
        background-color: rgba(0, 0, 0, 0.15);
        border-radius: 90px;
        height: 4px;
    }
    .product-information {
        width: 100px;
        text-align: center;
        text-transform: capitalize;
    }
    .product-price {
        width: 150px;
        text-align: center;
    }
    .quantity-selector-container {
        width: 150px;
        text-align: center;
        display: flex;
        justify-content: center;
    }
    .quantity-selector {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        background-color: #707070;
        border-radius: 80px;
        width: 100px;
        height: 50px;
    }
    .quantity-selector img {
        width: 10px;
    }
    .product-quantity {
        color: white;
    }
    .table-products {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }
    .product-images {
        width: 150px;
        padding: 10px 0;
    }
    .table-subtotal {
        display: flex;
        justify-content: space-evenly;
    }
    .table-checkout {
        display: flex;
    }
    .cart-header {
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.3);
        width: 150px;
        text-align: center;
    }
    .subtotal-header {
        text-transform: uppercase;
        color: rgba(0, 0, 0, 0.3);
        width: 150px;
    }
    .subtotal {
        width: 150px;
        text-align: center;
    }
    .table-checkout {
        display: flex;
        justify-content: space-evenly;
    }
    .button-container {
        width: 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .checkout {
        font-weight: bold;
        font-size: 22px;
        text-transform: uppercase;
        text-align: center;
        background: #df6e6a;
        border-radius: 80px;
        border-style: none;
        color: white;
        height: 50px;
        width: 200px;
    }
    .empty-first-col {
        width: 150px;
    }
    .empty-second-col {
        width: 100px;
    }
    .empty-third-col {
        width: 150px;
    }
    .empty-cart {
        text-align: center;
        color: #707070;
        text-transform: uppercase;
    }
</style>
