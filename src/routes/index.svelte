<script>
	import FeaturedProducts from "$lib/FeaturedProducts.svelte";
	import Hero from "$lib/Hero.svelte";
	import Newsletter from "$lib/Newsletter.svelte";
	import {products} from "../stores/store.js"
</script>

	<Hero />
	<FeaturedProducts {products}/>
	<Newsletter />

