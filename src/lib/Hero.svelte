<script></script>

<section>
    <div class="container">
        <img
            class="hero-image-1"
            src="https://ik.imagekit.io/ezwfmke3nhh/Hero/Hero_Image_1.png"
            alt=""
        />
        <img
            class="hero-image-mobile"
            src="https://ik.imagekit.io/ezwfmke3nhh/Hero/Hero_Image_Mobile_3.png"
            alt=""
        />
        <h1 class="hero-text">Enlighten<br />your<br />life.</h1>
        <img
            class="hero-image-2"
            src="https://ik.imagekit.io/ezwfmke3nhh/Hero/Hero_Image_2.png"
            alt=""
        />
        <!-- <div class="images-left"> 
            <picture class="hero-image-1">
                <source
                    type="image/webp"
                    srcset="/images/Hero/hero-image-1.webp"
                />
                <source
                    type="image/png"
                    srcset="/images/Hero/hero-image-1.png"
                />
                <img src="/images/Hero/hero-image-1.png" alt="" />
            </picture>
            <picture class="hero-image-1-shadow">
                <source
                    type="image/webp"
                    srcset="/images/Hero/hero-image-1-shadow.webp"
                />
                <source
                    type="image/png"
                    srcset="/images/Hero/hero-image-1-shadow.png"
                />
                <img src="/images/Hero/hero-image-1-shadow.png" alt="" />
            </picture>
        </div> -->
        <!-- <div class="images-right">
           
            <picture class="hero-image-2-shadow">
                <source
                    type="image/webp"
                    srcset="/images/Hero/hero-image-2-shadow.webp"
                />
                <source
                    type="image/png"
                    srcset="/images/Hero/hero-image-2-shadow.png"
                />
                <img src="/images/Hero/hero-image-2-shadow.png" alt="" />
            </picture>
            <picture class="hero-image-2">
                <source
                    type="image/webp"
                    srcset="/images/Hero/hero-image-2.webp"
                />
                <source
                    type="image/png"
                    srcset="/images/Hero/hero-image-2.png"
                />
                <img src="/images/Hero/hero-image-2.png" alt="" />
            </picture>
        </div> -->
    </div>
    <div class="background" style="display:flex;justify-content:center">
        <img
            class="elipse"
            src="/images/Hero/hero-background-elipse.svg"
            alt=""
        />
    </div>
</section>

<style>
    section {
        padding: 50px 0;
    }
    .container {
        display: flex;
        justify-content: space-between;
    }
    /* .images-right {
        display: flex;
        flex-direction: column;
    }
    .images-left {
        display: flex;
        flex-direction: column;
    } */
    .hero-text {
        font-weight: bold;
        color: black;
    }
    .hero-image-1 {
        width: 500px;
        margin-left: -150px;
    }

    .hero-image-2 {
        margin-right: -150px;
        width: 500px;
    }
    
    .hero-image-mobile {
        display: none
    }

    /* .hero-image-1-shadow {
        width: 400px;
        margin-top: -460px;
        margin-left: -50px;
    } */

    /* .hero-image-2-shadow {
        width: 400px;
        margin-bottom: -50px;
        margin-left: -30px;
    } */

    .elipse {
        position: absolute;
        z-index: -12000;
        margin-top: -600px;
    }

    @media only screen and (max-width: 768px) {
        .container {
            display: flex;
            justify-content: space-around;
        }
        .hero-text {
            font-weight: bold;
            color: black;
            font-size: 42px;
        }
        .hero-image-1 {
            display:none
        }
        .hero-image-2 {
            display: none;
        }
        .hero-image-mobile {
            display:block;
            width: 245px;
            margin-left: -100px;
        }
        .elipse {
            position: absolute;
            z-index: -12000;
            margin-top: -180px;
            height: 500px;
        }
    }
</style>
