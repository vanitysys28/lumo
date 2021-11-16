<script>
    import { getStores } from "$app/stores";
  const { page } = getStores();
  $: {
    if (typeof gtag !== "undefined"){
      gtag("config", "UA-SOMEANALYTICSID-1", {
        page_path: $page.path
      });
    }
  }
</script>