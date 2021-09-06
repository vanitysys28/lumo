<script>
    import Product from "$lib/Product.svelte"
    import {products,shipping} from "../../stores/store.js"
    import {cartitems} from "../../stores/store.js"

</script>

<Product {products}{shipping}/>
