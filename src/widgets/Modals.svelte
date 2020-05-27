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

<div class="loading-modal modal">Loading</div>


<div class="newsletter-success-modal">
  <div class="modal-overlay"></div>
  <div class="ajax-modal-content">
    <a class="close close-window btn" title="Close (Esc)">
      <i class="fa fa-times"></i>
    </a>
    <i class="fa fa-check" aria-hidden="true"></i>
    <span>Thank you for signing up!</span>
  </div>
</div>



<div class="ajax-lookbook-modal">
  <div class="overlay"></div>
  <div class="ajax-modal-content">
    <a href="javascript:void(0)" data-close-lookbook-modal class="close close-modal btn">
      <i class="fa fa-times"></i>
    </a>
    <div class="lookbook-content"></div>
  </div>
</div>


<div class="ajax-error-modal modal">
  <div class="modal-inner">
    <div class="ajax-error-title">Error</div>
    <div class="ajax-error-message"></div>
  </div>
</div>

<div class="ajax-success-modal modal">
  <div class="overlay"></div>
  <div class="content">


    <div class="ajax-left">
      <p class="added-to-cart info">Product successfully added to your shopping cart</p>
      <p class="added-to-wishlist info">translation missing: en.products.wishlist.added_to_wishlist</p>
      <img class="ajax-product-image" alt="modal window" src="/" />
      <div class="ajax-cart-desc">
        <h3 class="ajax-product-title"></h3>
        <span class="ajax_price"></span>
        <p>Qty:&nbsp;<span class="ajax_qty"></span></p>
      </div>
    </div>
    <div class="ajax-right">

      <p>There are <span class="ajax_cartCount"></span>&nbsp;item(s) in your cart</p>
      <span class="ajax_cartTotal"></span>
      <button class="btn continue-shopping" onclick="javascript:void(0)">Continue shopping</button>
      <div class="success-message added-to-cart"><a href="/cart" class="btn"><i class="fas fa-shopping-cart"></i>View Cart</a> </div>
      <!-- <div class="success-message added-to-wishlist"> <a href="/pages/wishlist" class="btn"><i class="fa fa-heart"></i>View Wishlist</a></div> -->
    </div>
    <a href="javascript:void(0)" class="close-modal"><i class="far fa-times-circle"></i></a>
  </div>
</div>




<div class="newsletterwrapper" data-newsletter id="email-modal">
  <div class="modal-overlay">
    <div class="window-content">
      <div class="column-left medium-down--hide">
        <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/t/2/assets/popup_newsletter_img.png?v=8466539546838516768" alt="Newsletter";>
      </div>
      <div class="column-right">
        <div class="window-box">
          <a class="close close-window" title="Close (Esc)">
            <svg aria-hidden="true" data-prefix="fal" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" class="svg-inline--fa fa-times fa-w-10 fa-2x"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" class=""></path></svg>
          </a>
          <div class="newsletter-title">
            <h2 class="title">Newsletter</h2>
            <span style="margin-top:10px;background:url('//cdn.shopify.com/s/files/1/0108/7370/0415/t/2/assets/leaf.png?v=5408308617789665931');background-repeat:no-repeat;width:165px;height:110px;text-align:center;margin:auto;display:block;"></span>
          </div>
          <p class="message">Subscribe to our newsletters now and stay up to
            date with new collections, latest lookbooks and
            exclusive offers.</p>
          <div id="mailchimp-email-subscibe">
            <div id="mc_embed_signup">
              <form method="post" action="/contact#contact_form" id="contact_form" accept-charset="UTF-8" class="contact-form">
                <input type="hidden" name="form_type" value="customer" /><input type="hidden" name="utf8" value="✓" />

                <input type="email" value="" placeholder="Your email address" name="contact[email]" class="mail" aria-label="Your email address" required="required"/>
                <input type="hidden" name="contact[tags]" value="newsletter"/>
                <input type="submit" class="btn" value="Subscribe" id="subscribe" />



              </form>

            </div>
          </div>
          <input id="dismiss" type="checkbox" name="dismiss"/>
          <label for="dismiss">
            <span>We do not spam</span>
          </label>



          <div class="social-sharing normal" data-permalink="">
            <label>Share this on: </label>

            <a target="_blank" href="//www.facebook.com/sharer.php?u=" class="share-facebook">
              <span class="fab fa-facebook"></span>
              <!-- <span class="share-title">Share</span>
              <span class="share-count">0</span>
              -->
            </a>

            <a target="_blank" href="//twitter.com/share?text=&amp;url=" class="share-twitter">
              <span class="fab fa-twitter"></span>
              <!-- <span class="share-title">Tweet</span>
              <span class="share-count">0</span>
              -->
            </a>


            <a target="_blank" href="//pinterest.com/pin/create/button/?url=&amp;media=http://cdn.shopify.com/s/assets/no-image-2048-5e88c1b20e087fb7bbe9a3771824e743c244f437e4f8ba93bbf7b11b53f7824c_1024x1024.gif&amp;description=" class="share-pinterest">
              <span class="fab fa-pinterest"></span>
              <!-- <span class="share-title">Pin it</span>
              <span class="share-count">0</span>
              -->
            </a>



            <a target="_blank" href="//plus.google.com/share?url=" class="share-google">
              <!-- Cannot get Google+ share count with JS yet -->
              <span class="fab fa-google"></span>
              <!--
              <span class="share-count">+1</span>
              -->
            </a>

          </div>

        </div>
      </div>
    </div>
  </div>
</div>

<div class="loading-modal compare_modal">Loading</div>
<div class="ajax-success-compare-modal compare_modal" id="moda-compare" tabindex="-1" role="dialog" style="display:none">
  <div class="overlay"> </div>
  <div class="modal-dialog modal-lg">
    <div class="modal-content content" id="compare-modal">
      <div class="modal-header">

        <h4 class="modal-title">Compare Products</h4>
      </div>
      <div class="modal-body">
        <div class="table-wrapper">
          <table class="table table-hover">
            <thead>
              <tr class="th-compare">
                <th></th>
              </tr>
            </thead>
            <tbody id="table-compare">

            </tbody>

          </table>
        </div>
      </div>
      <div class="modal-footer">
        <a href="javascript:void(0)" class="close-modal"><i class="far fa-times-circle"></i></a>
      </div>
    </div>
  </div>
</div>
