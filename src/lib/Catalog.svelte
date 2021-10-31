<script>
    import {products} from "../stores/store.js"
</script>

<section>
    <h2 class="title">Products</h2>
    <div class="container">
        <div class="subcontainer">
            {#each products as product}
                <div class="cards">
                    <a href="/products/{product.title}">
                        <img src={product.featured_image} alt="" />
                        <!-- <picture>
                            <source
                                type="image/webp"
                                srcset={product.webp_featured_image}
                            />
                            <source
                                type="image/png"
                                srcset={product.featured_image}
                            />
                            <img src={product.featured_image} alt="" />
                        </picture> -->
                    </a>
                    <a href="/products/{product.title}">
                        <h3 class="product-title">{product.title}</h3>
                    </a>
                    <a href="/products/{product.title}">
                        <p class="product-price">
                            {product.price}<span>€</span>
                        </p>
                    </a>
                </div>
            {/each}
        </div>
    </div>
</section>

<style>
    a {
        color: #000;
        text-decoration: none;
    }
    section {
        text-align: center;
    }
    .title {
        text-transform: uppercase;
    }
    .cards {
        text-align: center;
        padding: 50px 20px;
        text-transform: capitalize;
    }
    .container {
        display: flex;
        justify-content: center;
    }
    .subcontainer {
        width: 1500px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .subcontainer img {
        width: 500px;
        overflow: hidden;
        border-radius: 80px;
    }
    .product-title {
        margin-bottom: 0;
    }
    .product-price {
        margin-top: 0;
    }

    @media only screen and (max-width: 768px) {
        section {
            padding: 20px
        }
        .title {
            font-size: 28px;
        }
        .product-title {
            font-size: 24px;
        }
        .product-price {
            font-size: 22px;
            margin-bottom: 10px;
        }
        .cards {
            text-align: center;
            text-transform: capitalize;
            width: 45%;
            padding: 0;
        }
        .cards img {
            width: 100%;
        }
        h3 {
            margin-top: 10px;
        }
        .subcontainer img {
        border-radius: 20px;
    }
    }
</style>
