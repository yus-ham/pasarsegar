<script>
  import { Router } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import "./css/frame.css";
  import "./css/global.css";
</script>

<svelte:head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>
  <title>Svelte app</title>
  <link rel='icon' type='image/png' href='/imgs/smanka.jpg'>
  <link rel='stylesheet' href='/build/vendor.min.css'>
  <link rel='stylesheet' href='/build/bundle.css'>
</svelte:head>

<Router {routes} />