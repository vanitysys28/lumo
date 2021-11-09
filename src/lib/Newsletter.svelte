<script>
    let subscribed = false;

    function subscribe() {
        if (email.length > 0) {
            subscribed = true;
        }
    }

    let email = "";
</script>

<section>
    <img class="blob1" src="/images/Blobs/blob1.svg" alt="" />
    <img class="blob2" src="/images/Blobs/blob2.svg" alt="" />
    <div>
        <h2 class="title">Newsletter</h2>
    </div>

    {#if subscribed === false}
        <p>Sales, news and more. <br />Delivered straight to your inbox.</p>
        <p class="silent">PS: We hate spam too..</p>
        <div class="container">
            <div class="background">
                <input class="input" bind:value={email} type="text" />
                <button on:click={subscribe}
                    >Subscribe<img
                        class="subscribe-button-image"
                        src="/images/Newsletter/subscribe-mobile.svg"
                        alt=""
                    /></button
                >
            </div>
        </div>
    {:else}
        <p>Thanks for subscribing!</p>
    {/if}
</section>

<style>
    section {
        position: relative;
    }
    .subscribe-button-image {
        display: none;
    }
    .blob1 {
        position: absolute;
        height: 500px;
        right: 0;
        bottom: 0;
    }
    .blob2 {
        position: absolute;
        height: 500px;
        left: 0;
    }
    section {
        background-color: #fff;
        padding: 40px 0;
        font-weight: bold;
        text-align: center;
    }
    .input {
        border-radius: 80px;
        height: 50px;
        width: 400px;
        margin: 0;
        -webkit-appearance: none;
        border: 1px solid transparent;
        outline: 0 !important;
        text-align: center;
        font-weight: bold;
    }
    button {
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
        margin: 0 0 0 10px;
    }
    .container {
        display: flex;
        justify-content: center;
    }
    .background {
        background-color: #c4c4c4;
        border-radius: 100px;
        padding: 10px;
        align-items: center;
    }
    .title {
        text-transform: uppercase;
        margin: 0;
    }
    .silent {
        font-size: 16px;
    }

    @media only screen and (max-width: 768px) {
        .blob1 {
            height: 200px;
            top: -100px;
        }
        .blob2 {
            height: 200px;
            bottom: -100px;
        }
        .title {
            font-size: 28px;
        }
        .subscribe-button-image {
            display: block;
        }
        button {
            font-size: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
        }
        button img {
            width: 20px;
        }
        .background {
            display: flex;
        }
        .input {
            width: 200px;
            height: 40px;
        }
    }
</style>
