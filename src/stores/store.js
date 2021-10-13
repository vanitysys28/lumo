    import { writable } from 'svelte/store';

    export let products = [{
            title: "kona",
            variant: "white",
            featured: true,
            price: 160,
            quantity: 1,
            featured_image: "/images/Products/Kona.png",
            webp_images: [
                { img: "/images/Products/Kona.webp" },
                { img: "/images/Products/Kona.webp" },
                { img: "/images/Products/Kona.webp" },
                { img: "/images/Products/Kona.webp" },
            ],
            images: [
                { img: "/images/Products/Kona.png" },
                { img: "/images/Products/Kona.png" },
                { img: "/images/Products/Kona.png" },
                { img: "/images/Products/Kona.png" },
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
            featured_image: "/images/Products/Hikare.png",
            webp_images: [
                { img: "/images/Products/Hikare.webp" },
                { img: "/images/Products/Hikare.webp" },
                { img: "/images/Products/Hikare.webp" },
                { img: "/images/Products/Hikare.webp" },
            ],
            images: [
                { img: "/images/Products/Hikare.png" },
                { img: "/images/Products/Hikare.png" },
                { img: "/images/Products/Hikare.png" },
                { img: "/images/Products/Hikare.png" },
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
            featured_image: "https://ik.imagekit.io/ezwfmke3nhh/Sutikku",
            webp_images: [
                { img: "/images/Products/Sutikku.webp" },
                { img: "/images/Products/Sutikku.webp" },
                { img: "/images/Products/Sutikku.webp" },
                { img: "/images/Products/Sutikku.webp" },
            ],
            images: [
                { img: "/images/Products/Sutikku.png" },
                { img: "/images/Products/Sutikku.png" },
                { img: "/images/Products/Sutikku.png" },
                { img: "/images/Products/Sutikku.png" },
            ],
            description: "Product description",
            features: "Product features",
        },
    ];

    export let shipping = "Shipping terms";

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

    export let cartitems = writable([])