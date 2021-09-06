    import { writable } from 'svelte/store';

    export let products = [{
            title: "kona",
            variant: "white",
            featured: true,
            price: 160,
            quantity: 1,
            featured_image: "../src/images/Products/Kona.png",
            images: [
                { img: "../src/images/Products/Kona.png" },
                { img: "../src/images/Products/Kona.png" },
                { img: "../src/images/Products/Kona.png" },
                { img: "../src/images/Products/Kona.png" },
            ],
            description: "Product description",
            features: "Product features",
        },
        {
            title: "hikare",
            variant: "white",
            featured: true,
            price: 180,
            quantity: 1,
            featured_image: "../src/images/Products/Hikare.png",
            images: [
                { img: "../src/images/Products/Hikare.png" },
                { img: "../src/images/Products/Hikare.png" },
                { img: "../src/images/Products/Hikare.png" },
                { img: "../src/images/Products/Hikare.png" },
            ],
            description: "Product description",
            features: "Product features",
        },
        {
            title: "sutikku",
            variant: "black",
            featured: true,
            price: 130,
            quantity: 1,
            featured_image: "../src/images/Products/Sutikku.png",
            images: [
                { img: "../src/images/Products/Sutikku.png" },
                { img: "../src/images/Products/Sutikku.png" },
                { img: "../src/images/Products/Sutikku.png" },
                { img: "../src/images/Products/Sutikku.png" },
            ],
            description: "Product description",
            features: "Product features",
        },
    ];

    export let shipping = "Shipping terms";

    export let paymentmethods = [
        { alt: "Visa", src: "../src/images/Footer/Visa.svg" },
        { alt: "Mastercard", src: "../src/images/Footer/Mastercard.svg" },
        { alt: "Apple Pay", src: "../src/images/Footer/Apple.svg" },
        { alt: "PayPal", src: "../src/images/Footer/Paypal.svg" },
    ];
    export let socials = [{
            name: "Facebook",
            alt: "Facebook",
            src: "../src/images/Footer/Facebook.svg",
        },
        {
            name: "Instagram",
            alt: "Instagram",
            src: "../src/images/Footer/Instagram.svg",
        },
    ];

    export let navbar_search = [{
        alt: "Search",
        src: "../src/images/Header/Search.svg"
    }]

    export let navbar_cart = [{
        alt: "Cart",
        src: "../src/images/Header/cart.svg"
    }]

    export let cartitems = writable([])