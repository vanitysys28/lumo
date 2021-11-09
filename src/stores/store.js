    import { writable } from 'svelte/store';
    import { browser } from "$app/env";

    export let products = [{
            title: "kona",
            variants: ["black", "white"],
            featured: true,
            price: 150,
            quantity: 1,
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Kona/main.jpg",
            images: [
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/main.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/1.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/2.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/3.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/4.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/5.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/6.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/7.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/8.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/9.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/10.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona/11.jpg" },
            ],
            description: "<p>Inspired by true Swedish minimalism the Kona Floor Lamp is an iconic in design and aesthetics. A unique and innovative design combined with flawless modern lighting.</p><p>More a piece of art than a lamp. Light up your space beautifully, create the perfect ambience.</p><p>Your lamp is suitable for worldwide usage.&nbsp;</p>",
            features: '<ul> <li > 1 + million colours </li> <li > 330 + multicolour effects </li> <li > Stop / start pause function </li> <li > Increase / decrease speed of running multicolour effects </li> <li > Aesthetically Designed </li> <li > Dimmable </li> <li > Remote Controlled(multiple lamps can be controlled via one remote) </li> <li > Height: 140 cm / 55 "&nbsp;</li> <li > Leg Length: 40 cm / 15.7 "&nbsp;</li> <li > Power: 100 - 240 v / 20 W / 50 hz </li> <li > Cord Length: 250 cm / 98 "</li> <li > UK / AUS / US / EUR plugs included with universal adapter</li> </ul>',
            shopify_id: ["Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQ5Mjc0MjA1Mzk4OA==","Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQ5Mjc0MjA4Njc1Ng=="]
        },
        {
            title: "sutikku",
            variants: ["black", "white"],
            featured: true,
            price: 160,
            quantity: 1,
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/main.jpg",
            images: [
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/main.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/1.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/2.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/3.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/4.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/5.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/6.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/7.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/8.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/9.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/10.jpg" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/11.jpg" },
            ],
            description: "<p>Following in true minimalistic tradition, we have adopted two fascinating concepts to humans. <strong>Simplicity and light.</strong> Light up your surroundings and immerse yourself in the mystery of ambience.</p><p>More a piece of art than a lamp. Light up your space beautifully, create the perfect ambience. <strong>Perfect for living rooms &amp; bedrooms.</strong></p>",
            features: '<ul> <li > 100 - 240 v(suitable worldwide)</li> <li > 20 W / 50 hz </li> <li > 250 cm / 98 " cord length</li> <li > UK / AUS / US / EUR plugs included </li> <li > Dimmable Light </li> <li > Remote Controlled - multiple lamps controlled via single remote </li> <li > Lamp Height: 150 cm / 59 "</li> <li > Base Diameter: 15 cm / 5.9 "</li> <li > Power Cord: 250 cm / 98 </li> </ul>',
            shopify_id: ["Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQ5Mjc0Mzk1NDUzMg==","Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQ5Mjc0Mzk4NzMwMA=="]
        },
        {
            title: "hikare",
            variants: ["black", "white"],
            featured: true,
            price: 150,
            quantity: 1,
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/main.png",
            images: [
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/main.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/1.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/2.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/3.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/4.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/5.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/6.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/7.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/8.png" },
            ],
            description: "<p>A masterpiece of decor, blending minimalist style with modern and innovative lighting. Explore millions of possibilities, create endless ambiences. Perfect for living rooms and bedrooms.</p>",
            features: '<ul><li>100-240v</li><li>20 W / 50hz</li><li>250cm / 98" cord length </li><li>UK/AUS / US / EUR plugs included </li><li>Dimmable Light</li > <li> Remote Controlled </li><li>Wall Mounted (fixtures &amp; screws included)</li > <li> Simple installation </li></ul >',
            shopify_id: ["Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQ5Mjc0MTQ5NjkzMg==","Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQ5Mjc0MTUyOTcwMA=="]
        },
    ];

    export let shipping = "<p>All orders are processed and shipped as soon as possible. We ship via DHL, DPD, FedEx, UPS.</p><p> We take extra care in ensuring that your goods are prepared and packaged ready to be transported around the world.</p>";

    export let paymentmethods = [
        { alt: "Visa", src: "/images/Footer/Visa.svg" },
        { alt: "Mastercard", src: "/images/Footer/Mastercard.svg" },
        { alt: "Apple Pay", src: "/images/Footer/Apple.svg" },
        { alt: "PayPal", src: "/images/Footer/Paypal.svg" },
    ];
    export let socials = [{
            name: "Facebook",
            alt: "Facebook",
            src: "/images/Footer/Facebook.svg",
        },
        {
            name: "Instagram",
            alt: "Instagram",
            src: "/images/Footer/Instagram.svg",
        },
    ];

    export let navbar_search = [{
        alt: "Search",
        src: "/images/Header/Search.svg"
    }]

    export let navbar_cart = [{
        alt: "Cart",
        src: "/images/Header/Cart.svg"
    }]

    export let cartitems = writable(
        browser && JSON.parse(sessionStorage.getItem("cart")) || []);

    cartitems.subscribe((val) => browser && (sessionStorage.cart = JSON.stringify(val)));