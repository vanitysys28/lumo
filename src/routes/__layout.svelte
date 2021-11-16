<script>
    import "../global.css";
    import Analytics from "$lib/Analytics.svelte"
    import Header from "$lib/Header.svelte";
    import Information from "$lib/Information.svelte";
    import Footer from "$lib/Footer.svelte";
</script>

<Analytics />
<Header />
<slot />
<Information />
<Footer />
