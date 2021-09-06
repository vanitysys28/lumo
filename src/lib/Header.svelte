<script>
    export let navbar_search
    export let navbar_cart

</script>

<section>
    <div class="container">
        <div class="logo">
            <a href ="/">Lümo</a>
        </div>
        <div class="navbar-right">
            <ul>
                <li><a href="/" >Home</a></li>
                <li><a href="/catalog" >Catalog</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li>
                    <a href="{'#'}"><img src={navbar_search[0].src} alt="" /></a>
                </li>
                <li>
                    <a href="/cart"><img src={navbar_cart[0].src} alt="" /></a>
                </li>
            </ul>
        </div>
    </div>
</section>

<style>
    section {
        margin-top:50px;
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
        align-items: center  
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
        font-size: 42px;
    }
    li img {
        width: 32px;
    }
</style>
