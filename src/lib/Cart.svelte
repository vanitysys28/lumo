<script>
    import { cartitems } from "../stores/store.js";
    import { onMount } from "svelte";

    onMount(() => {
        if ($cartitems.length > 0) {
            $cartitems = JSON.parse(sessionStorage.getItem("cart"));
        }
    });

    const increaseQuantity = (product) => {
        for (let cartitem of $cartitems) {
            if (cartitem.title === product.title) {
                product.quantity += 1;
                $cartitems = $cartitems;
                sessionStorage.setItem("cart", JSON.stringify($cartitems));
            }
        }
    };
    const decreaseQuantity = (product) => {
        for (let cartitem of $cartitems) {
            if (cartitem.title === product.title) {
                if (product.quantity > 1) {
                    product.quantity -= 1;
                    $cartitems = $cartitems;
                    sessionStorage.setItem("cart", JSON.stringify($cartitems));
                    return;
                } else {
                    $cartitems = $cartitems.filter(
                        (cartItem) => cartItem != product
                    );
                    sessionStorage.setItem("cart", JSON.stringify($cartitems));
                }
            }
        }
    };

    let subtotal;

    $: subtotal = $cartitems.reduce(
        (sum, cartitem) => sum + cartitem.price * cartitem.quantity,
        0
    );
</script>

<section>
    <h2 class="title">Cart</h2>
    {#if $cartitems.length === 0}
        <h3 class="empty-cart">Cart is empty</h3>
    {:else}
        <div class="table">
            <div class="table-header">
                <div class="first-col" />
                <div class="second-col" />
                <h3 class="cart-header third-col">Quantity</h3>
                <h3 class="cart-header fourth-col">Total</h3>
            </div>
            <div class="separator">
                <div class="first-col" />
                <div class="second-col" />
                <div class="line" />
            </div>
            {#each $cartitems as cartitem}
                {#if cartitem.quantity > 0}
                    <div class="table-products">
                        <!-- <picture>
                            <source
                                class="product-images"
                                type="image/webp"
                                srcset={cartitem.webp_featured_image}
                            />
                            <source
                                class="product-images"
                                type="image/png"
                                srcset={cartitem.featured_image}
                            />
                            <img
                                class="product-images"
                                src={cartitem.featured_image}
                                alt=""
                            />
                        </picture> -->
                        <img
                            class="product-images first-col"
                            src={cartitem.featured_image}
                            alt=""
                        />
                        <div class="product-information second-col">
                            <p class="product-title">{cartitem.title}</p>
                            <p class="product-variant">{cartitem.variant}</p>
                        </div>
                        <div class="quantity-selector-container third-col">
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
                        <p class="product-price fourth-col">
                            {cartitem.quantity * cartitem.price}<span>€</span>
                        </p>
                    </div>
                {/if}
            {/each}
            <div class="separator">
                <div class="first-col" />
                <div class="second-col" />
                <div class="line" />
            </div>
            <div class="table-subtotal">
                <div class="first-col" />
                <div class="second-col" />
                <h3 class="subtotal-header third-col">Subtotal</h3>
                <h3 class="subtotal fourth-col">{subtotal}<span>€</span></h3>
            </div>
            <div class="table-checkout">
                <div class="first-col" />
                <div class="second-col" />
                <div class="third-col" />
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
        margin-bottom: 40px;
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
        margin: 10px 0;
    }
    .table-subtotal {
        display: flex;
        justify-content: space-evenly;
        align-items: baseline;
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
    .first-col {
        width: 150px;
    }
    .second-col {
        width: 100px;
    }
    .third-col {
        width: 150px;
    }
    .fourth-col {
        width: 150px;
    }
    .empty-cart {
        text-align: center;
        color: #707070;
        text-transform: uppercase;
    }

    @media only screen and (max-width: 768px) {
        .table {
            margin-bottom: 20px;
            padding: 0 10px;
        }
        .title {
            font-size: 28px;
        }
        .empty-cart {
            font-size: 28px;
        }
        .first-col {
            width: 25%;
        }
        .second-col {
            width: 20%;
        }
        .third-col {
            width: 25%;
        }
        .fourth-col {
            width: 20%;
        }
        .product-images {
            /* width: 100px; */
            padding: 10px 0;
        }
        .cart-header {
            font-size: 18px;
        }
        .subtotal-header {
            font-size: 18px;
        }
        .subtotal {
            font-size: 20px;
        }
        .product-title {
            font-size: 18px;
        }
        .product-price {
            font-size: 18px;
        }
        .product-variant {
            font-size: 16px;
        }
        .product-quantity {
            font-size: 16px;
        }
        .quantity-selector {
            width: 70px;
            height: 35px;
        }
        .quantity-selector img {
            width: 5px;
        }
        .product-information p {
            margin: 0;
        }
        .line {
            width: 48%;
        }
        .table-checkout > .first-col,
        .table-checkout > .second-col,
        .table-checkout > .third-col {
            display: none;
        }
        .checkout {
            font-size: 20px;
        }
    }
</style>
