<script></script>

<section>

    <div class="container">
        <div class="images-left">
            <img class="hero-image-1" src="/images/Hero/hero-image-1.png" alt="" />
            <img class="hero-image-1-shadow"src="/images/Hero/hero-image-1-shadow.png"alt=""/>
        </div>
        <h1 class="hero-text">Enlighten<br/>your<br/>life.</h1>
        <div class="images-right">
            <img class="hero-image-2-shadow" src="/images/Hero/hero-image-2-shadow.png" alt=""/>
            <img class="hero-image-2" src="/images/Hero/hero-image-2.png" alt="" />
        </div>
    </div>
    <div class="background" style="display:flex;justify-content:center">
        <img class="elipse" src="/images/Hero/hero-background-elipse.png" alt="">
    </div>
</section>

<style>
    section {
        padding:50px 0;
    }
    .container {
        display: flex;
        justify-content: space-between;
    }
    .images-right {
        display: flex;
        flex-direction: column;
    }
    .images-left {
        display: flex;
        flex-direction: column;
    }
    .hero-text {
        font-weight: bold;
        color: black;
    }
    .hero-image-1 {
        position: relative;
        width: 500px;
        margin-left: -150px;
    }
    .hero-image-1-shadow {
        width: 400px;
        margin-top: -420px;
        margin-left:-20px;
    }
    .hero-image-2 {
        margin-top: -400px;
        margin-right: -340px;
        width: 500px;
    }
    .hero-image-2-shadow {
        width: 400px;
        margin-bottom:-20px;
        margin-left: -20px;
    }
    
    .elipse {
       position: absolute;
       z-index:-12000;
       margin-top:-600px
    }
</style>
