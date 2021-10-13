<script></script>

<section>
    <h3 class="title">Hate to wait?</h3>
    <div class="container">
        <img class="shipping" src="/images/Information/shipping.svg" alt="">
        <p >
            We offer worldwide shipping. Most international orders are on a flight
            to your country within 12 hours of placing your order. Any question?
            Read the next paragraph.
        </p>
    </div>
    <h3 class="title">Here for you</h3>
    <div class="container">
        <img class="support" src="/images/Information/support.svg" alt="">
    <p >
        Our team is dedicated to providing a premium, unparalleled shopping
        experience. All emails and queries are responded to within 24-48 hours.
        We promise.
    </p>
    </div>
</section>

<style>
    section {
        font-weight: bold;
        background-color: #f2f2f2;
        padding:40px 0;
        z-index: -2;
    }
    .container {
        display: flex;
        justify-content: center;
    }
    p {
        text-align: center;
        width: 600px;
        margin: 0;
        padding: 0 0 20px 0;
    }
    .title {
        text-transform: uppercase;
        text-align: center;
        padding: 20px 0;
        margin:0
    }
    .shipping {
        position: absolute;
        width: 700px;
         margin-top: -20px;
    }
    .support {
        position: absolute;
        width: 700px;
        margin-top: -20px;
    }

    @media only screen and (max-width: 768px) {
        .title {
            font-size: 22px;
        }

        p {
            font-size: 16px;
            width: 85%;
            z-index: 1;
        }
        .shipping {
        position: absolute;
        width: 300px;
        margin-top: 15px;
    }
    .support {
        position: absolute;
        width: 300px;
        margin-top: 15px;
    }
    }
</style>
