<script>
  import {goto, url} from '@sveltech/routify'
  import {user, pageTitle} from '../utils/store'
  import {decryptUserData} from '../utils/constants'
  import Swal from 'sweetalert2'

          let username = ''
  let imageUrl = ''
  let userRoleId = 0
  let data = {}

</script>

<style>
</style>

<div id="shopify-section-support-block-type-1" class="shopify-section index-section">
  <div data-section-id="support-block-type-1" data-section-type="support-block-type-1" class="support-block-type-1" style="float:left;width:100%;">
    <div class="grid-uniform">
      <div class="container">
        <ul class="support_block" style="background:#89c74a;">
          <li class="grid__item wide--one-quarter post-large--one-quarter large--one-quarter medium--one-half small--one-half wow fadeInUp" data-wow-delay="ms">

            <div class="support_section" >
              <div class="support_icon" style="background:#ffffff;">
                <a href="" class="icon" style="color:#89c74a;"><i class="fas fa-truck"></i></a>
              </div>
              <div class="support_text">
                <h5 style="color:#ffffff;">Free Shipping</h5>
                <p style="color:#ffffff;" class="desc">Worldwide</p>
              </div>
            </div>
          </li>
          <li class="grid__item wide--one-quarter post-large--one-quarter large--one-quarter medium--one-half small--one-half wow fadeInUp" data-wow-delay="ms">

            <div class="support_section" >
              <div class="support_icon" style="background:#ffffff;">
                <a href="" class="icon" style="color:#89c74a;"><i class="fas fa-phone"></i></a>
              </div>
              <div class="support_text">
                <h5 style="color:#ffffff;">Helpline</h5>
                <p style="color:#ffffff;" class="desc">+(000)123-4567</p>
              </div>
            </div>
          </li>
          <li class="grid__item wide--one-quarter post-large--one-quarter large--one-quarter medium--one-half small--one-half wow fadeInUp" data-wow-delay="ms">

            <div class="support_section" >
              <div class="support_icon" style="background:#ffffff;">
                <a href="" class="icon" style="color:#89c74a;"><i class="fas fa-headphones"></i></a>
              </div>
              <div class="support_text">
                <h5 style="color:#ffffff;">24x7</h5>
                <p style="color:#ffffff;" class="desc">Customer Support</p>
              </div>
            </div>
          </li>
          <li class="grid__item wide--one-quarter post-large--one-quarter large--one-quarter medium--one-half small--one-half wow fadeInUp" data-wow-delay="ms">

            <div class="support_section" >
              <div class="support_icon" style="background:#ffffff;">
                <a href="" class="icon" style="color:#89c74a;"><i class="fas fa-exchange-alt"></i></a>
              </div>
              <div class="support_text">
                <h5 style="color:#ffffff;">Returns</h5>
                <p style="color:#ffffff;" class="desc">and Exchange</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="dt-sc-hr-invisible-medium"></div>
  </div>
</div>
