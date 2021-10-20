<script>
    import Header from "$lib/Header.svelte"
    import Information from "$lib/Information.svelte"
    import Footer from "$lib/Footer.svelte"
    import {paymentmethods, socials,navbar_cart,navbar_search} from "../stores/store.js";
    import '../global.css'
</script>

<Header {navbar_search}{navbar_cart}></Header>
<slot></slot>
<Information></Information>
<Footer {paymentmethods}{socials} ></Footer>