<script></script>

<section>
    <div>
        <h2 class="title">Newsletter</h2>
        <img class="blob1" src="./src/images/Blobs/blob1.svg" alt="" />
        <img class="blob2" src="./src/images/Blobs/blob2.svg" alt="" />
    </div>

    <p>Sales, news and more. <br />Delivered straight to your inbox.</p>
    <p class="silent">PS: We hate spam too..</p>
    <div class="container">
        <div class="background">
            <input class="input" type="text" />
            <button>Subscribe</button>
        </div>
    </div>
</section>

<style>
    .blob1 {
        position: absolute;
        height: 500px;
        right: 0;
        top: 1300px;
    }
    .blob2 {
        position: absolute;
        height: 500px;
        left: 0;
        top: 1650px;
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
        margin:0
    }
    .silent {
        font-size: 100%;
    }
</style>
