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

<div class="home-slideshow">
  <div class="variable-width" data-slick=''>
    <div class="slick-list slider_style_2">
      <a href="/collections">
        <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-1_2000x.jpg?v=1581341041" class="slide-img medium-down--hide" alt="" />
        <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-3_9e2bd3f0-2fbd-488b-b46a-80834635b72a_767x.jpg?v=1581507053" class="slide-img wide--hide post-large--hide large--hide" alt="" />
      </a>

      <div class="slider-content slider-content-bg--1558075573427" style="">
        <div class="slide_left" style="">
          <div class="icon">
          </div>
          <h5 class="slide-text animated "
              style="display:inline-block;
              font-size: 24px;
              color:#000000;
              ">
            Natural Health care Ingredients
          </h5>

          <h2 class="slide-heading animated "
              style="
              font-size: 54px;
              color:#d08126;
              ">
            Gerocery Shopping
          </h2>
          <h4 class=" slide-sub-heading-2 animated "
              style="
              font-size: 62px;
              color:#000000;
              ">
            Save upto 30% off
          </h4>

          <a href="/collections" class="slide-button animated btn " style="background:#d8943a;color:#ffffff;">
            shop now
          </a>
        </div>
      </div>
    </div>

    <div class="slick-list slider_style_3">
      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-2_2000x.jpg?v=1581341045" class="slide-img medium-down--hide" alt="" />
      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-2_7a3327c4-6914-485b-ac21-af877ec64dfb_767x.jpg?v=1581507110" class="slide-img wide--hide post-large--hide large--hide" alt="" />

      <div class="slider-content slider-content-bg--1581341142617" style="">
        <div class="slide_left" style="">
          <div class="icon">
          </div>
          <h5 class="slide-text animated "
              style="display:inline-block;
              font-size: 36px;
              color:#303130;
              ">
            Groca
          </h5>

          <h2 class="slide-heading animated "
              style="
              font-size: 54px;
              color:#e7160e;
              ">
            Vegetable 100% organic
          </h2>
          <h4 class=" slide-sub-heading-2 animated "
              style="
              font-size: 24px;
              color:#000;
              ">
            Natural Health Care Ingredients
          </h4>
          <h4 class=" slide-sub-heading-3 animated "
              style="
              font-size: 48px;
              color:#303130;
              ">
            50% off
          </h4>

          <a href="" class="slide-button animated btn " style="background:#ffffff;color:#e7160e;">
            shop now
          </a>
        </div>
      </div>


    </div>

    <div class="slick-list slider_style_2">


      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-3_2000x.jpg?v=1581341055" class="slide-img medium-down--hide" alt="" />



      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-1_834bd35c-8d44-44ed-b5f2-995e3490064e_767x.jpg?v=1581507154" class="slide-img wide--hide post-large--hide large--hide" alt="" />






      <div class="slider-content slider-content-bg--1581341125402" style="">
        <div class="slide_left" style="">
          <div class="icon">
            <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/slider-icon_100X.png?v=1581426760" alt="">
          </div>
          <h5 class="slide-text animated "
              style="display:inline-block;
              font-size: 24px;
              color:#000;
              ">
            100% Healthy & Affordable
          </h5>

          <h2 class="slide-heading animated "
              style="
              font-size: 54px;
              color:#4a8601;
              ">
            Organic Vegetables
          </h2>
          <h4 class=" slide-sub-heading-2 animated "
              style="
              font-size: 24px;
              color:#000;
              ">
            Small Chages Big Difference
          </h4>

          <a href="" class="slide-button animated btn " style="background:#ffffff;color:#000;">
            shop now
          </a>
        </div>
      </div>


    </div>
  </div>
</div>
