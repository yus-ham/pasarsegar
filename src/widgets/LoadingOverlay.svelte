<script>
  // https://codepen.io/bernethe/pen/dorozd
  import {onMount} from 'svelte';
  import {fade} from 'svelte/transition';
  let visible = true

  onMount(() => setTimeout(() => visible = false, 500))
</script>

<style>
@keyframes spCircRot {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.loading-overlay {
    position: fixed;
    left: calc(-2500px + 50vw);
    top: calc(-2500px + 50vh);
    width: 5000px;
    height: 5000px;
    z-index: 9999;
    background: url(../imgs/smanka.jpg) center no-repeat #fff;
    animation: spCircRot .7s infinite linear;
}
</style>

{#if visible}
    <div class="loading-overlay" out:fade></div>
{#endif}