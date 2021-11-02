<script>
    export let mobilemenushown = false;

    function closeMenu() {
        mobilemenushown = false;
    }
</script>

<section>
    <div class="container-left">
        <ul>
            <li class="home" on:click={closeMenu}><a href="/">Home</a></li>
            <div class="line" />
            <li class="catalog" on:click={closeMenu}><a href="/catalog">Catalog</a></li>
            <div class="line" />
            <li class="about-us" on:click={closeMenu}><a href="/about-us">About Us</a></li>
            <div class="line" />
            <li class="search" on:click={closeMenu}><a href="/contact-us">Contact Us</a></li>
            <div class="line" />
            <li class="cart" on:click={closeMenu}><a href="/cart">Cart</a></li>
        </ul>
    </div>
    <div class="container-right">
        <img on:click={closeMenu} class="close-button" src="/images/Header/Close Button.svg" alt="">
    </div>
</section>

<style>
    section {
        z-index: 2;
        display: flex;
        position: absolute;
        background-color: #F2F2F2;
        font-weight: bold;
        text-transform: uppercase;
        width: 75%;
        border-radius: 0px 0px 20px 0px;
        box-shadow: 5px 4px 4px rgba(0, 0, 0, 0.25);
        padding: 45px 0 50px 20px
    }
    
    .container-left {
        width: 75%;
    }
    .container-right {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 25%;
    }
    .close-button {
        margin: 10px 0 0 0;
        width: 32px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    margin: 0
    }
 
    li {
        font-size: 32px;
        margin: 10px 0 10px 0;
    }
a {
        color: #000;
        text-decoration: none;
    }
    .line {
        width: 80%;
        background-color: rgba(0, 0, 0, 0.15);
        border-radius: 90px;
        height: 4px;
    }
</style>
