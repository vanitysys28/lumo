<script>
    import { getStores } from "$app/stores";
  const { page } = getStores();
  $: {
    if (typeof gtag !== "undefined"){
      gtag("config", "G-9PVX16WZC1", {
        page_path: $page.path
      });
    }
  }
</script>