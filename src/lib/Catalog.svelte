<script>
    export let products
</script>

<section>
    <h2 class="title">Products</h2>
    <div class="container">

        <div class="subcontainer">
            {#each products as product}
                <div class="cards">
                    <a href="/products/{product.title}">
                        <img src={product.featured_image} alt="" />
                    </a>
                    <a href="/products/{product.title}">
                        <h3 class="product-title">{product.title}</h3>
                    </a>
                    <a href="/products/{product.title}">
                        <p class="product-price">{product.price}<span>€</span></p>
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
        display:flex;
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
    }
    .product-title {
        margin-bottom:0
    }
    .product-price {
        margin-top: 0
    }
</style>
