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

<div id="shopify-section-1558066628478" class="shopify-section index-section index-section--flush">
  <div class="wrapper">
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
  </div>
</div>

<div id="shopify-section-1566803003214" class="shopify-section index-section">
  <div data-section-id="1566803003214" data-section-type="grid-banner-type-14" class="grid-banner-type-14">
    <div class="grid-uniform">
      <div class="container">
        <div class=" grid-banner-type-14-section">
          <div class="grid__item wide--one-half post-large--one-half large--one-half medium-down--one-half small--grid__item img-hover-effect-3 img-hover-effect wow fadeInLeft animated">
            <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/img-1_1920X.jpg?v=1580208074" alt="Veggies" />
            <div class="featured-content" >
              <h5 style="color:#000">Veggies</h5>
              <h4 style="color:#000"><span> 100% </span> Organic Products</h4>
              <a class="btn three" href="" style="color:#fff;border:none;background-color:#fe6d30;">Buy Now</a>
            </div>
          </div>
          <div class="grid__item wide--one-half post-large--one-half large--one-half medium-down--one-half small--grid__item img-hover-effect img-hover-effect-4 wow fadeInRight animated">
            <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/img-2.jpg?v=1580208099" alt="Fruits" />
            <div class="featured-content" >
              <h5 style="color:#000">Fruits</h5>
              <h4 style="color:#000"><span> 100% </span> Organic Products</h4>
              <a class="btn four" href="" style="color:#fff;border:none;background-color:#f4a602;">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dt-sc-hr-invisible-large"></div>
  </div>
</div>

