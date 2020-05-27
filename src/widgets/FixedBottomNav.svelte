<script>
  //  https://codepen.io/john-sexton/pen/oeGGag

//    import {onMount} from 'svelte'
//    import {goto} from '@sveltech/routify'
//    import {devices, currDevGroup, currUpdateDevice} from '../utils/store'
//    import {gpsmonApi} from '../utils/fetch'
//
//    let devInfo
//
//    onMount(devGroupChanged)
//
//    async function devGroupChanged(e) {
//      $devices = await getDevices(e ? e.target.value : 0)
//    }
//
//    function getDevGroups() {
//      return gpsmonApi('GET', '/device-groups')
//              .then((respon) => respon.json())
//              .catch((err) => [])
//    }
//
//    function getDevices(groupId=0) {
//      return gpsmonApi('GET', '/devices?group_id='+ groupId)
//              .then((respon) => respon.json())
//              .catch((err) => [])
//    }
//
//    currUpdateDevice.subscribe((dev) => {
//      let icon = document.querySelector(`.dev-${dev.id} i`)
//      if (icon) {
//        icon.classList.remove('text-success')
//        icon.classList.remove('text-danger')
//        icon.classList.add(`text-${dev.status === 'online' ? 'success' : 'danger'}`)
//      }
//    })
</script>


<style>
/* body {
  padding: 10px;
  padding-bottom: 50px;
} */

/* h1 {
  margin-bottom: 2000px;
} */

.mobile-bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  will-change: transform;
  -webkit-transform: translateZ(0);
          transform: translateZ(0);
  display: -webkit-box;
  display: flex;
  height: 50px;
  box-shadow: 0 -2px 5px -2px #333;
  background-color: #fff;
}
.mobile-bottom-nav__item {
  -webkit-box-flex: 1;
          flex-grow: 1;
  text-align: center;
  font-size: 12px;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: center;
          justify-content: center;
}
.mobile-bottom-nav__item--active {
  color: red;
}
.mobile-bottom-nav__item-content {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
}
</style>

<nav class="mobile-bottom-nav">
	<div class="mobile-bottom-nav__item mobile-bottom-nav__item--active">
		<div class="mobile-bottom-nav__item-content">
			<i class="material-icons">home</i> one
		</div>
	</div>
	<div class="mobile-bottom-nav__item">
		<div class="mobile-bottom-nav__item-content">
			<i class="material-icons">mail</i> two
		</div>
	</div>
	<div class="mobile-bottom-nav__item">
		<div class="mobile-bottom-nav__item-content">
			<i class="material-icons">person</i> three
		</div>
	</div>

	<div class="mobile-bottom-nav__item">
		<div class="mobile-bottom-nav__item-content">
			<i class="material-icons">phone</i> four
		</div>
	</div>
</nav>
