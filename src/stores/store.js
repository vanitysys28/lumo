    import { writable } from 'svelte/store';
    import { browser } from "$app/env";

    export let products = [{
            title: "kona",
            variant: "white",
            featured: true,
            price: 160,
            quantity: 1,
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Kona",
            images: [
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Kona" },
            ],
            description: "<p>Product description</p>",
            features: "<p>Product features</p>",
        },
        {
            title: "hikare",
            variant: "white",
            featured: true,
            price: 180,
            quantity: 1,
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Hikare",
            images: [
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Hikare" },
            ],
            description: "<p>Product description</p>",
            features: "<p>Product features</p>",
        },
        {
            title: "sutikku",
            variant: "black",
            featured: true,
            price: 130,
            quantity: 1,
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku",
            images: [
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku" },
                { img: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku" },
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