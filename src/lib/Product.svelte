<script>
    import { getStores } from "$app/stores";
    import { cartitems } from "../stores/store.js";
    export let products;
    export let shipping;

    const { page } = getStores();

    let descriptionShown = true;
    let featuresShown = false;
    let shippingShown = false;

    var product = products.filter(
        (a) => a.title == $page.path.split("/").pop()
    );

    let producttitle = product[0].title;
    let cartproduct;

    function addToCart() {
        if ($cartitems.find((o) => o.title === producttitle)) {
            console.log("Product already in cart, increased quantity");
            cartproduct = $cartitems.find((o) => o.title === producttitle);
            cartproduct.quantity += 1;
            sessionStorage.setItem("cart", JSON.stringify($cartitems));
        } else {
            $cartitems.push({
                title: product[0].title,
                variant: product[0].variant,
                featured_image: product[0].featured_image,
                // webp_featured_image: product[0].webp_featured_image,
                quantity: 1,
                price: product[0].price,
            });
            sessionStorage.setItem("cart", JSON.stringify($cartitems));
        }
    }
</script>

<section>
    <div class="container">
        <div class="media">
            <img
                class="featured-image"
                src={product[0].featured_image}
                alt=""
            />
            <!-- <picture>
                    <source
                        type="image/webp"
                        srcset={product[0].webp_featured_image}
                    />
                    <source
                        type="image/png"
                        srcset={product[0].featured_image}
                    />
                    <img src={product[0].featured_image} alt="" />
                </picture> -->
            <div class="secondary-images">
                {#each product[0].images as image}
                    <img src={image.img} alt="" />
                    <!-- <picture>
                        <source
                            type="image/webp"
                            srcset={product[0].webp_images[0].img}
                        />
                        <source type="image/png" srcset={image.img} />
                        <img src={image.img} alt="" />
                    </picture> -->
                {/each}
            </div>
        </div>
        <div class="information">
            <h2 class="title">{product[0].title}</h2>
            <h3 class="price">{product[0].price}<span>€</span></h3>
            <button class="buy" on:click={addToCart}>Buy now</button>
            <div class="information-panes">
                <div class="information-buttons">

                    {#if descriptionShown}
                        <button class="active">Description</button>
                    {:else}
                        <button
                            class="disabled"
                            on:click={() => (
                                (descriptionShown = !descriptionShown),
                                (shippingShown = false),
                                (featuresShown = false)
                            )}>Description</button
                        >
                    {/if}
                    {#if featuresShown}
                        <button class="active">Features</button>
                    {:else}
                        <button
                            class="disabled"
                            on:click={() => (
                                (featuresShown = !featuresShown),
                                (shippingShown = false),
                                (descriptionShown = false)
                            )}>Features</button
                        >
                    {/if}
                    {#if shippingShown}
                        <button class="active">Shipping</button>
                    {:else}
                        <button
                            class="disabled"
                            on:click={() => (
                                (shippingShown = !shippingShown),
                                (descriptionShown = false),
                                (featuresShown = false)
                            )}>Shipping</button
                        >
                    {/if}
                </div>
                {#if descriptionShown}
                    <div class="description">{@html products[0].description}</div>
                {/if}
                {#if featuresShown}
                    <div class="features">{@html products[0].features}</div>
                {/if}
                {#if shippingShown}
                    <div class="shipping">{@html shipping}</div>
                {/if}
            </div>
        </div>
    </div>
</section>

<style>
    section {
        margin: 50px 0;
    }
    .container {
        display: flex;
        justify-content: space-around;
    }
    .information {
        width: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .information-panes {
      width: 90%
    }
    .information-buttons {
      display:flex;
      justify-content: space-between;
    }
    .title {
        margin: 0;
        text-transform: capitalize;
    }
    .price {
        margin: 0;
    }
    .secondary-images img {
        width: 100px;
        padding: 10px;
    }
    button.buy {
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
        margin: 20px;
    }
    button.active {
        font-weight: bold;
        font-size: 22px;
        text-transform: uppercase;
        text-align: center;
        background: #707070;
        border-radius: 80px;
        border-style: none;
        color: white;
        height: 50px;
        width: 200px;
    }
    button.disabled {
        font-weight: bold;
        font-size: 22px;
        text-transform: uppercase;
        text-align: center;
        background: rgba(112, 112, 112, 0.3);
        border-radius: 80px;
        border-style: none;
        color: white;
        height: 50px;
        width: 200px;
    }
    /* .description, .features, .shipping {

        font-size: 22px;
        font-weight: bold;
    } */

    @media only screen and (max-width: 768px) {
        .title {
            font-size: 28px;
        }
        .information {
            width: 100%
        }

        .container {
            flex-direction: column;
        }

        .media {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .featured-image {
            width: 90%;
        }

        .information-panes button {
            width: 100px;
            font-size: 12px;
        }

        .description, .features, .shipping {
            text-align: center;
        }
        .secondary-images {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 90%;
        }
        .secondary-images img {
            width: 100px;
            margin: 10px 1px;
            padding: 0;
        }
    }
</style>
