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

<div class="clearfix" id="quickview-template" style="display:none">
  <div class="overlay"></div>
  <div class="content clearfix">
    <div class="product-img images">
      <div class="quickview-featured-image product-photo-container"></div>
      <div class="more-view-wrapper">
        <ul class="product-photo-thumbs quickview-more-views-owlslider owl-carousel owl-theme">
        </ul>
        <div class="quick-view-carousel"></div>
      </div>
    </div>
    <div class="product-shop summary">
      <div class="product-item product-detail-section">
        <h2 class="product-title"><a>&nbsp;</a></h2>
        <p class="item-text product-description"></p>
        <div class="prices product_price">
          <label>Price :</label>
          <div class="price" id="QProductPrice"></div>
          <div class="compare-price" id="QComparePrice"></div>
        </div>
        <div class="product-infor">
          <p class="product-inventory"><label>Availability :</label><span></span></p>
        </div>
        <div class="details clearfix">
          <form action="/cart/add" method="post" class="variants">
            <select name='id' style="display:none"></select>
            <div class="qty-section quantity-box">
              <label>Quantity :</label>
              <div class="dec button qtyminus">-</div>
              <input type="number" name="quantity" id="Qty" value="1" class="quantity"/>
              <div class="inc button qtyplus">+</div>
            </div>
            <div class="total-price">
              <label>Subtotal :</label><span ></span>
            </div>
            <div class="actions">
              <button type="button" class="add-to-cart-btn btn">
                Add to Cart
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <a href="javascript:void(0)" class="close-window"></a>
  </div>
</div>
