<script>
    export let paymentmethods;
    export let socials;
</script>

<section>
    <div class="container-left">
        <ul class="links">
            <li><a href="/">Homepage</a></li>
            <li>Contact</li>
            <li>Search</li>
        </ul>
        <ul class="social">
            {#each socials as social}
                <div class="social-item">
                    <img src={social.src} alt={social.alt} />
                    <li>{social.name}</li>
                </div>
            {/each}
        </ul>
    </div>

    <div class="container-right">
        <div class="logo">© Lümo 2021</div>

        <div class="payments">
            {#each paymentmethods as paymentmethod}
                <img src={paymentmethod.src} alt="" />
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
        padding: 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-weight: bold;
        text-transform: uppercase;
        font-size: 22px;
    }
    .container-left {
        display: flex;
    }
    .links {
        padding: 0 20px;
        list-style-type: none;
    }
    .links li {
        padding: 5px 0px;
    }
    .social {
        padding: 0 20px;
        list-style-type: none;
    }
    .social li {
        padding: 5px 0;
    }
    .social-item {
        display: flex;
        align-items: center;
    }
    .social-item img {
        width: 30px;
        margin-right: 10px;
    }
    .container-right {
        display: flex;
        flex-direction: column;
    }
    .logo {
        text-align: center;
    }
    .payments {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 200px;
        list-style-type: none;
    }
    .payments img {
        padding: 5px;
        width: 50px;
    }
       @media only screen and (max-width: 768px) {
      .links {
        display: none;
    }
      .social {
        display: none;
    }
    section {
        justify-content: center
    }

    }
</style>
