<script>
    import { products } from "../stores/store.js";
</script>

<section>
    <h2 class="title">Our products</h2>

    <div class="container">
        {#each products as product}
            {#if product.featured}
                <div class="cards">
                    <a href="/products/{product.title}">
                        <img src={product.featured_image} alt="" />
                    </a>
                    <a href="/products/{product.title}">
                        <div>{product.title}</div>
                    </a>
                    <div class="price-container">
                        <a href="/products/{product.title}">
                            <div>{product.price}<span>€</span></div>
                        </a>
                        <a class="discount" href="/products/{product.title}">
                            <div>{product.compare_price}<span>€</span></div>
                         </a>
                    </div>
                </div>
            {/if}
        {/each}
    </div>

    <div class="button">
        <a href="/catalog">
            <button>See more</button>
        </a>
    </div>
</section>

<style>
    a {
        color: #000;
        text-decoration: none;
    }
    section {
        padding: 40px 0;
        font-weight: bold;
        background-color: #f2f2f2;
    }
    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        margin-bottom: 20px;
    }
    .title {
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 20px;
    }
    .cards {
        text-align: center;
        font-size: 24px;
        text-transform: capitalize;
    }

    .cards img {
        width: 400px;
        border-radius: 80px;
    }
    .cards picture {
        max-width: 400px;
    }
    .button {
        padding: 20px 0;
        display: flex;
        justify-content: center;
    }

    button {
        font-weight: bold;
        font-size: 22px;
        text-transform: uppercase;
        text-align: center;
        background: #707070;
        border-radius: 80px;
        color: white;
        padding: 10px 80px;
        cursor: pointer;
    }
    .price-container {
        display: flex;
        justify-content: center;
    }
    .discount {
        margin: 0 0 0 20px;
        color:#df6e6a;
        text-decoration: line-through;
        text-decoration-thickness: 3px;
    }

    @media only screen and (max-width: 768px) {
        section {
            padding: 20px;
        }

        h2 {
            font-size: 28px;
        }
        .cards {
            width: 45%;
            margin: 0 0 20px 0;
        }
        .cards img {
            width: 100%;
            border-radius: 20px;
        }
        .container {
            justify-content: space-between;
            margin-bottom: 0px;
        }
    }
</style>
