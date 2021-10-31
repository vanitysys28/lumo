    import { writable } from 'svelte/store';
    import { browser } from "$app/env";

    export let products = [{
            title: "kona",
            variants: ["black", "white"],
            featured: true,
            price: 160,
            quantity: 1,
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Kona/main.jpg",
            images: [
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
            description: "<p>Product description</p>",
            features: "<p>Product features</p>",
        },
        {
            title: "hikare",
            variants: ["black", "white"],
            featured: true,
            price: 180,
            quantity: 1,
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/main.png",
            images: [
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/1.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/2.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/3.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/4.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/5.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/6.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/7.png" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare/8.png" },
            ],
            description: "<p>Product description</p>",
            features: "<p>Product features</p>",
        },
        {
            title: "sutikku",
            variants: ["black", "white"],
            featured: true,
            price: 130,
            quantity: 1,
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku/main.jpg",
            images: [
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
            description: "<p>Product description</p>",
            features: "<p>Product features</p>",
        },
    ];

    export let shipping = "<p>All orders are processed and shipped from the United Kingdom. We ship via DHL, DPD, FedEx.</p><p> We take extra care in ensuring that your goods are prepared and packaged ready to be transported around the world.</p>";

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