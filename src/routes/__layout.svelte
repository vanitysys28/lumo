<script>
    import "../global.css";
    import Header from "$lib/Header.svelte";
    import Information from "$lib/Information.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Header />
<slot />
<Information />
<Footer />
