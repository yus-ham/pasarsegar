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

<div id="shopify-section-1566815575912" class="shopify-section index-section">
  <div data-section-id="1566815575912" data-section-type="newsletter-block news-block-4" class="newsletter-block news-block-4 " style="background-image:url('//cdn.shopify.com/s/files/1/0108/7370/0415/files/bg-3_1920X.jpg?v=1580819493');background-repeat:no-repeat;background-position:center;;">
    <div class="newsletter-block-type-4 ">
      <div class="overlay"></div>
      <div class="container">
        <div class="news-inner-block">
          <div class="border-title wow fadeInUp animated">
            <h4 class="newslet_title " style="color:#000;">
              Subscribe to Our Newsletter
            </h4>
          </div>
          <div class="mc-embedded-subscribe-form wow fadeInUp animated">
            <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" class="contact-form">
              <input type="hidden" name="form_type" value="customer" /><input type="hidden" name="utf8" value="✓" />

              <input type="email" value="" placeholder="Your email address" name="contact[email]" class="mail" aria-label="Your email address"/>
              <input type="hidden" name="contact[tags]" value="newsletter"/>
              <button type="submit" class="btn subscribe" name="subscribe" value="" >Read More</button>

            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>
