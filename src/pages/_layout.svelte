<script>
  import {goto} from '@sveltech/routify';
  import {user, prevUrl} from '../utils/store';
  import FixedBottomNav from '../widgets/FixedBottomNav.svelte';
  import LoadingOverlay from '../widgets/LoadingOverlay.svelte';

  //  if (!$user) {
  //    $prevUrl = window.location.pathname
  //    $goto('/auth/signin')
  //  }
</script>

<slot/>
<FixedBottomNav/>
<LoadingOverlay/>