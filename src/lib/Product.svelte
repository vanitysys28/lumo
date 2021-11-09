<script>
    import { getStores } from "$app/stores";
    import { cartitems, products, shipping } from "../stores/store.js";

    const { page } = getStores();

    let descriptionShown = true;
    let featuresShown = false;
    let shippingShown = false;
    let buyButton;

    var product = products.filter(
        (a) => a.title == $page.path.split("/").pop()
    );

    let producttitle = product[0].title;
    let cartproduct;

    let variantactive = "black";
    let idactive = product[0].shopify_id[0];
    let mainimage = product[0].images[0].img;
    let mainimageindex = 0;

    $: console.log(mainimageindex);

    function previousImage() {
        if (mainimageindex == 0) {
            mainimage = product[0].images[product[0].images.length - 1].img;
            mainimageindex = product[0].images.length - 1;
        } else {
            mainimage = product[0].images[mainimageindex - 1].img;
            mainimageindex -= 1;
        }
    }

    function nextImage() {
        if (mainimageindex < product[0].images.length - 1) {
            mainimage = product[0].images[mainimageindex + 1].img;
            mainimageindex += 1;
        } else {
            mainimage = product[0].images[0].img;
            mainimageindex = 0;
        }
    }

    function addToCart() {
        if (
            $cartitems.find(
                (o) => o.title + o.variant === producttitle + variantactive
            )
        ) {
            cartproduct = $cartitems.find(
                (o) => o.title + o.variant === producttitle + variantactive
            );
            cartproduct.quantity += 1;
            sessionStorage.setItem("cart", JSON.stringify($cartitems));
            $cartitems = $cartitems;
        } else {
            $cartitems.push({
                title: product[0].title,
                variant: variantactive,
                featured_image: product[0].featured_image,
                id: idactive,
                quantity: 1,
                price: product[0].price,
            });
            sessionStorage.setItem("cart", JSON.stringify($cartitems));
            $cartitems = $cartitems;
        }
        buyButton.innerHTML = "Added to cart";
        buyButton.style.opacity = 0.5;
        buyButton.disabled = true;
        setTimeout(function () {
            buyButton.innerHTML = "Buy now";
            buyButton.style.opacity = 1;
            buyButton.disabled = false;
        }, 1500);
    }
</script>

<section>
    <div class="container">
        <div class="media">
            <div class="images">
                {#each product[0].images as image}
                    <img
                        src={image.img}
                        alt=""
                        class:featured-image={mainimage === image.img}
                        on:click={() => (mainimage = image.img)}
                    />
                {/each}
                <div class="image-switcher">
                    <img
                        src="/images/Products/Previous.svg"
                        alt=""
                        on:click={previousImage}
                    />
                    <img
                        src="/images/Products/Next.svg"
                        alt=""
                        on:click={nextImage}
                    />
                </div>
            </div>
        </div>
        <div class="information">
            <h2 class="title">{product[0].title}</h2>
            <h3 class="price">{product[0].price}<span>€</span></h3>
            <button bind:this={buyButton} class="buy" on:click={addToCart}
                >Buy now</button
            >
            <div class="variant-selector-container">
                {#each product[0].variants as variant}
                    <!-- <button class="variant-active">{variant}</button> -->
                    {#if variant === "black"}
                        <button
                            class:variant-active={variantactive === "black"}
                            on:click={() => (variantactive = "black")}
                            >{variant}</button
                        >
                    {:else}
                        <button
                            class:variant-active={variantactive === "white"}
                            on:click={() => (
                                (variantactive = "white"),
                                (idactive = product[0].shopify_id[1])
                            )}>{variant}</button
                        >
                    {/if}
                {/each}
            </div>
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
                    <div class="description">
                        {@html product[0].description}
                    </div>
                {/if}
                {#if featuresShown}
                    <div class="features">{@html product[0].features}</div>
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
    .media {
        width: 500px;
    }
    .information {
        width: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .information-panes {
        width: 90%;
    }
    .information-buttons {
        display: flex;
        justify-content: space-between;
    }
    .title {
        margin: 0;
        text-transform: capitalize;
    }
    .price {
        margin: 0;
    }
    .featured-image {
        width: 500px !important;
        border-radius: 80px !important;
        order: -1;
    }
    .images {
        display: flex;
        width: 500px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .images img {
        width: 100px;
        padding: 10px;
        border-radius: 30px;
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
    .variant-active {
        font-weight: bold;
        font-size: 22px;
        text-transform: uppercase;
        text-align: center;
        background: #707070 !important;
        border-radius: 80px;
        border-style: none;
        color: white;
        height: 50px;
        width: 200px;
        margin: 0;
    }
    .variant-selector-container button {
        font-weight: bold;
        font-size: 22px;
        text-transform: uppercase;
        background-color: rgba(112, 112, 112, 0);
        text-align: center;
        border-radius: 80px;
        border-style: none;
        color: white;
        height: 50px;
        width: 200px;
        margin: 0;
    }
    .variant-selector-container {
        display: flex;
        background-color: rgba(112, 112, 112, 0.3);
        border-radius: 100px;
        padding: 5px;
        align-items: center;
        margin-bottom: 20px;
    }
    .image-switcher {
        display: none;
    }
    .features {
        font-size: 22px;
        font-weight: bold;
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
            width: 100%;
        }

        .container {
            flex-direction: column;
        }

        .media {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: auto;
        }

        .featured-image {
            width: 90% !important;
            border-radius: 50px !important;
            display: block !important;
        }

        .information-panes button {
            width: 30%;
            font-size: 14px;
        }

        .description,
        .features,
        .shipping {
            text-align: center;
        }
        .images {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
        }
        .images img {
            width: 100px;
            margin: 10px 5px;
            padding: 0;
            display: none;
        }
        .variant-selector-container {
            width: 70%;
        }
        .image-switcher {
            display: flex;
        }
        .image-switcher img {
            height: 20px;
            width: 20px;
            display: block;
        }
    }
</style>
