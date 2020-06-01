<script>
  import { Router, basepath } from "@sveltech/routify";
  import { routes } from "@sveltech/routify/tmp/routes";
  import { setBasePath } from "./utils/config-local.js"
  import "./css/frame.css";
  import "./css/global.css";
  setBasePath(basepath)
</script>

<svelte:head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>
  <title>Svelte app</title>
  <link rel='icon' type='image/png' href='{$basepath}/imgs/smanka.jpg'>
  <link rel='stylesheet' href='{$basepath}/build/global.min.css'>
  <link rel='stylesheet' href='{$basepath}/build/bundle.css'>
</svelte:head>

<Router {routes} />