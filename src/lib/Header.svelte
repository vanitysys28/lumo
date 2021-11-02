<script>
    import { cartitems, navbar_cart, navbar_search } from "../stores/store.js";
    import MobileMenu from "./MobileMenu.svelte";

    let mobilemenushown;

    function showMobileMenu() {
        mobilemenushown = !mobilemenushown;
    }

    $: cartitemtotal = $cartitems.reduce(
        (sum, cartitem) => sum + cartitem.quantity,
        0
    )
</script>

{#if mobilemenushown == true}
    <MobileMenu bind:mobilemenushown />
{/if}

<section>
    <div class="container">
        <div class="logo">
            <a href="/">Lümo</a>
        </div>
        <div class="navbar-right">
            <ul>
                <li class="home"><a href="/">Home</a></li>
                <li class="catalog"><a href="/catalog">Catalog</a></li>
                <li class="about-us"><a href="/about-us">About Us</a></li>
                <li class="about-us"><a href="/contact-us">Contact Us</a></li>
                <!-- <li class="search">
                    <a href={"#"}
                        ><img
                            src={navbar_search[0].src}
                            alt={navbar_search[0].alt}
                        /></a
                    >
                </li> -->
                <li class="cart">
                    <a class="cart-link" href="/cart"
                        ><img
                            src={navbar_cart[0].src}
                            alt={navbar_cart[0].alt}
                        />
                        {#if $cartitems.length > 0}
                            <div class="cart-quantity-container">
                                <div class="cart-quantity">
                                    <img
                                        class="cart-quantity-circle"
                                        src="/images/Header/Circle.svg"
                                        alt=""
                                    />
                                    <span class="cart-quantity-text"
                                        >{cartitemtotal}</span
                                    >
                                </div>
                            </div>
                        {/if}
                    </a>
                </li>
                <li class="hamburger-menu" on:click={showMobileMenu}>
                    <img
                        src="/images/Header/Hamburger.svg"
                        alt={navbar_cart[0].alt}
                    />
                </li>
            </ul>
        </div>
    </div>
</section>

<style>
    section {
        margin-top: 25px;
        font-weight: bold;
        text-transform: uppercase;
    }
    a {
        color: #000;
        text-decoration: none;
    }
    .container {
        font-size: 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    ul {
        list-style-type: none;
        display: flex;
        flex-direction: row;
    }
    li {
        margin: 0 50px 0 0;
    }
    .logo {
        padding: 0 50px;
        font-size: 36px;
    }
    li img {
        width: 32px;
    }
    .hamburger-menu {
        display: none;
    }
    .cart {
        position: relative;
    }
    .cart-quantity-container {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
    .cart-quantity {
        position: relative;
        text-align: center;
    }
    .cart-quantity-circle {
        width: 20px;
    }

    .cart-quantity-text {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
        color: white;
    }
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .logo {
            padding: 0;
            margin-left: 30px;
        }
        li {
            margin: 0 30px 0 0;
        }
        .hamburger-menu {
            display: flex;
        }
        .home,
        .catalog,
        .search,
        .about-us {
            display: none;
        }
        .cart-link {
            display: flex;
        }
        .cart-quantity-container {
            bottom: 15px;
            left: 20px;
        }
    }
</style>
