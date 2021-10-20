<script>
    import MobileMenu from "./MobileMenu.svelte";
    export let navbar_search;
    export let navbar_cart;

    let mobilemenushown;

    function showMobileMenu() {
        mobilemenushown = !mobilemenushown;
    }
</script>

{#if mobilemenushown == true}
    <MobileMenu bind:mobilemenushown/>
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
                <li class="search">
                    <a href={"#"}
                        ><img
                            src={navbar_search[0].src}
                            alt={navbar_search[0].alt}
                        /></a
                    >
                </li>
                <li class="cart">
                    <a class="cart-link" href="/cart"
                        ><img
                            src={navbar_cart[0].src}
                            alt={navbar_cart[0].alt}
                        /></a
                    >
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
        margin-top: 50px;
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
        padding: 0 50px 0 0;
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
    @media only screen and (max-width: 768px) {
        /* For mobile phones: */
        .logo {
            padding: 0;
            margin-left: 30px;
        }
        li {
            padding: 0 30px 0 0;
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
    }
</style>
