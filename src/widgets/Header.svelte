<script>
  import {goto, url} from '@sveltech/routify'
  import {user, pageTitle} from '../utils/store'
  // import Swal from 'sweetalert2'

          let username = ''
  let imageUrl = ''
  let userRoleId = 0
  let data = {}

  function attemptSignOut() {
    Swal.fire({
      text: `Apakah anda yakin keluar aplikasi ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Ya',
      cancelButtonText: 'Tidak'
    }).then((result) => {
      if (result.value) {
        $user = null
        localStorage.clear()
        location.reload()
      }
    })
  }

</script>

<style>
</style>

<header class="site-header">
  <div class="header-sticky">
    <div id="header-landing" class="sticky-animate">
      <div class="container">
        <div class="grid--full site-header__menubar">
          <h1 class="site-header__logo order-header" itemscope itemtype="http://schema.org/Organization">
            <a href="/" itemprop="url">
              <img class="normal-logo" src="//cdn.shopify.com/s/files/1/0108/7370/0415/t/2/assets/logo.png?v=12158625195246214118" alt="Groca" itemprop="logo">
            </a>
          </h1>
          <div class="menubar-section order-header">
            <div class="desktop-megamenu">
              <div id="shopify-section-navigation" class="shopify-section"><div class="nav-bar-mobile">
                  <nav class="nav-bar" role="navigation">
                    <div class="site-nav-dropdown_inner">
                      <div class="menu-tool">
                        <ul class="site-nav">

                          <li class=" ">
                            <a class=" current color1" href="/">
                              <span>
                                Home
                              </span>
                            </a>




                          </li>

                          <li class=" dropdown mega-menu ">
                            <a class=" color2" href="/collections/all">
                              <span>
                                Shop
                              </span>
                            </a>


                            <div class="site-nav-dropdown">
                              <div class="container style_2"> <!-- container div start -->

                                <div class="col-1 parent-mega-menu">
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/cherry" class=" ">
                                      Fruits
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/apple" >
                                          Apple
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/mandrain-orange" >
                                          Orange
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/cherry" >
                                          Cherry
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/elderberry" >
                                          Elderberry
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/capsicum" >
                                          Capsicum
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/beetroot" class=" ">
                                      Vegetables
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/beetroot" >
                                          Beetroot
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/broccoli" >
                                          Broccoli
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/capsicum" >
                                          Capsicum
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/cucumber" >
                                          Cucumber
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/plum" >
                                          Plum
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/tm-rice" class=" ">
                                      Food Grains
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/brown-rice" >
                                          Brown Rice
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/horse-gram" >
                                          Horse Gram
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/wheat" >
                                          Wheat
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/tm-rice" >
                                          Rice
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/cherry" >
                                          Cherry
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/green-peas" class=" ">
                                      Farm Foods
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/badam" >
                                          Badam
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/coriander" >
                                          Coriander
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/flower-mushroom" >
                                          Flower Mushroom
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/plum" >
                                          Plum
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/jamun-fruit" >
                                          Jamun Fruit
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/badam" class=" ">
                                      Meat
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/wheat" >
                                          Wheat
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/watermelon" >
                                          Watermelon
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/tm-rice" >
                                          TM Rice
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/potato" >
                                          Potato
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/badam" >
                                          Badam
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/cherry" class=" ">
                                      Grains
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/capsicum" >
                                          Capsicum
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/cherry" >
                                          Cherry
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/fish-curry" >
                                          Fish
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/capsicum" >
                                          Capsicum
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/broccoli" >
                                          Broccoli
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-2">
                                  <div class="col-left col-sm-6">
                                    <a href="" title="">
                                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-1_2000x.jpg?v=1585300878" alt="" />
                                    </a>
                                    <a href="" title="">
                                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-2_2000x.jpg?v=1585300913" alt="" />
                                    </a>
                                  </div>
                                  <div class="col-right col-sm-6">
                                    <a href="" title="">
                                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-3-3_2000x.jpg?v=1585300930" alt="" />
                                    </a>
                                  </div>

                                </div>
                              </div> <!-- container div end -->
                            </div>


                          </li>

                          <li class=" dropdown mega-menu ">
                            <a class=" color3" href="/collections/cookies">
                              <span>
                                Best Sellers
                              </span>
                            </a>


                            <div class="site-nav-dropdown">
                              <div class="container style_1"> <!-- container div start -->

                                <div class="col-1 parent-mega-menu">
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/cucumber" class=" ">
                                      Seeds
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/beetroot" >
                                          Beetroot
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/badam" >
                                          Badam
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/apple" >
                                          Apple
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/broccoli" >
                                          Broccoli
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/brown-rice" >
                                          Brown Rice
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/butter-cookies" >
                                          Butter Cookies
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/capsicum" >
                                          Capsicum
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/coriander" >
                                          Coriander
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/choco-cookies" >
                                          Choco Cookies
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/cherry" class=" ">
                                      Cookies
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/coriander" >
                                          Coriander
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/choco-cookies" >
                                          Choco Cookies
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/cucumber" >
                                          Cucumber
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/cucumber" >
                                          Cucumber
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/fresh-meat" >
                                          Fresh Meat
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/elderberry" >
                                          Elderberry
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/green-peas" >
                                          Green Peas
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/jamun-fruit" >
                                          Jamun Fruit
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/cucumber" >
                                          Cucumber
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/choco-cookies" class=" ">
                                      Dairy
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/watermelon" >
                                          Watermelon
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/tm-rice" >
                                          TM Rice
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/potato" >
                                          Potato
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/plum" >
                                          Plum
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/parsley" >
                                          Parsley
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/mandrain-orange" >
                                          Orange
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/nuts-cookies" >
                                          Nuts Cookies
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/cherry" >
                                          Cherry
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/apple" >
                                          Apple
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-2">
                                  <a href="" title="">
                                    <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-2_2000x.jpg?v=1585302175" alt="" />
                                  </a>
                                </div>
                              </div> <!-- container div end -->
                            </div>


                          </li>

                          <li class=" dropdown mega-menu ">
                            <a class=" color4" href="/collections/eggs">
                              <span>
                                Deal of the Day
                              </span>
                            </a>


                            <div class="site-nav-dropdown">
                              <div class="container style_3"> <!-- container div start -->

                                <div class="col-1 parent-mega-menu">
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/nuts-cookies" class=" ">
                                      Herbs
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/wheat" >
                                          Wheat
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/potato" >
                                          Potato
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/plum" >
                                          Plum
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/parsley" >
                                          Parsley
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/mandrain-orange" >
                                          Orange
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/nuts-cookies" >
                                          Nuts Cookies
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/jamun-fruit" >
                                          Jamun Fruit
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/green-peas" >
                                          Green Peas
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/elderberry" class=" ">
                                      Dhals
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/apple" >
                                          Apple
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/badam" >
                                          Badam
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/beetroot" >
                                          Beetroot
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/brown-rice" >
                                          Brown Rice
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/butter-cookies" >
                                          Butter Cookies
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/cherry" >
                                          Cherry
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/coco-cookies" >
                                          Coco Cookies
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/coriander" >
                                          Coriander
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div class="inner col-xs-12 col-sm-4">
                                    <!-- Menu level 2 -->
                                    <a href="/products/choco-cookies" class=" ">
                                      Desserts
                                    </a>
                                    <ul class="dropdown">
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/egg" >
                                          Egg
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/elderberry" >
                                          Elderberry
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/fresh-meat" >
                                          Fresh Meat
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/horse-gram" >
                                          Horse Gram
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/mandrain-orange" >
                                          Orange
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/parsley" >
                                          Parsley
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/beetroot" >
                                          Beetroot
                                        </a>
                                      </li>
                                      <!-- Menu level 3 -->
                                      <li>
                                        <a href="/products/coriander" >
                                          Coriander
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div class="col-2">
                                  <div class="col-left">
                                    <div class="widget-featured-product ">
                                      <div class="widget-product">
                                        <div class="products-grid">







                                          <div class="grid-item product-item " id="product-1984209420351">
                                            <a href="/products/tm-rice" class="product-grid-image">
                                              <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-8_large.png?v=1583926829" alt="TM Rice">
                                            </a>
                                            <div class="details">
                                              <a class="product-title" href="/products/tm-rice">
                                                TM Rice
                                              </a>
                                              <span class="shopify-product-reviews-badge" data-id="1984209420351"></span>
                                              <div class="price-box">
                                                <p class="regular-product">
                                                  <span><span class=money>$523.00</span></span>
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-right">
                                    <a href="" title="">
                                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/files/menu-4_2000x.jpg?v=1585302907" alt="" />
                                    </a>
                                  </div>
                                </div>
                              </div> <!-- container div end -->
                            </div>


                          </li>

                          <li class=" dropdown">
                            <a class="menu__moblie color5" href="/pages/about-us">
                              <span>
                                Pages
                              </span>
                            </a>


                            <ul class="site-nav-dropdown level-one">
                              <li >
                                <a href="/pages/about-us" class="">
                                  <span>
                                    About Us
                                  </span>
                                </a>
                                <ul class="site-nav-dropdown level-two">
                                </ul>
                              </li>
                              <li >
                                <a href="/blogs/news" class="">
                                  <span>
                                    Blog
                                  </span>
                                </a>
                                <ul class="site-nav-dropdown level-two">
                                </ul>
                              </li>
                            </ul>


                          </li>

                          <li class=" ">
                            <a class=" color6" href="/pages/contact-us">
                              <span>
                                Contact Us
                              </span>
                            </a>




                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                </div>

              </div>
            </div>
          </div>
          <div id="shopify-section-header-model-2" class="shopify-section">
            <ul class="menu-icon">

              <li>
                <a href="/pages/wishlist" title="Wishlist"> <svg class="wish" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" enable-background="new 0 0 100 100" xml:space="preserve"><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M91.968,45.738c-0.066,0.504-0.734,1.526-1.877,2.949 c-0.731,0.993-1.52,1.94-2.393,2.806C76.984,63.556,49.874,89.265,49.874,89.265s-27.11-25.709-37.823-37.771 c-0.873-0.867-1.661-1.814-2.393-2.806c-1.143-1.423-1.81-2.445-1.877-2.949C6.011,42.406,5,38.61,5,34.574 c0-13.166,10.673-23.839,23.839-23.839c9.111,0,17.022,5.115,21.035,12.627c4.013-7.512,11.924-12.627,21.035-12.627 c13.166,0,23.839,10.673,23.839,23.839C94.749,38.61,93.738,42.406,91.968,45.738z M70.909,16.344 c-0.821,0-1.624,0.073-2.417,0.179c-0.202,0.027-0.402,0.058-0.602,0.092c-0.722,0.121-1.433,0.275-2.123,0.477 c-0.059,0.018-0.12,0.028-0.178,0.046c-0.763,0.233-1.497,0.524-2.214,0.85c-0.135,0.062-0.267,0.128-0.401,0.193 c-0.646,0.314-1.271,0.662-1.872,1.046l-0.01-0.078c0,0-0.802,0.596-1.967,1.552c-0.05,0.043-0.107,0.076-0.156,0.119 c-0.033,0.028-0.064,0.058-0.095,0.087c-2.429,2.015-6.328,6.544-9,10.462c-2.672-3.918-6.571-8.447-9-10.462 c-0.031-0.029-0.063-0.059-0.095-0.087c-0.05-0.043-0.107-0.076-0.157-0.119c-1.165-0.956-1.967-1.552-1.967-1.552l-0.01,0.078 c-0.601-0.384-1.226-0.733-1.872-1.046c-0.133-0.065-0.265-0.131-0.4-0.193c-0.717-0.326-1.451-0.617-2.214-0.85 c-0.059-0.018-0.12-0.028-0.178-0.046c-0.691-0.203-1.401-0.357-2.123-0.477c-0.2-0.033-0.4-0.065-0.602-0.092 c-0.793-0.105-1.595-0.179-2.417-0.179c-10.068,0-18.23,8.162-18.23,18.23c0,0.716,0.052,1.42,0.132,2.114 c0.024,0.206,0.063,0.407,0.093,0.611c0.075,0.496,0.165,0.986,0.279,1.469c0.05,0.211,0.104,0.419,0.161,0.627 c0.135,0.492,0.291,0.974,0.465,1.449c0.06,0.164,0.115,0.33,0.18,0.491c0.25,0.625,0.526,1.237,0.841,1.826l0,0 c0.232,0.433,0.512,0.834,0.777,1.244c-0.007,0.009-0.03,0.041-0.036,0.048c-1.189,1.37,34.583,36.065,36.373,37.391 c1.79-1.326,37.561-36.021,36.373-37.391c-0.006-0.007-0.029-0.039-0.036-0.048c0.264-0.411,0.545-0.811,0.777-1.244l0,0 c0.316-0.589,0.591-1.201,0.841-1.826c0.065-0.162,0.119-0.328,0.18-0.491c0.174-0.475,0.33-0.957,0.465-1.449 c0.057-0.208,0.111-0.416,0.161-0.627c0.114-0.482,0.204-0.972,0.279-1.469c0.031-0.204,0.069-0.405,0.093-0.611 c0.08-0.695,0.132-1.398,0.132-2.114C89.139,24.506,80.978,16.344,70.909,16.344z"/></g></g></svg> </a>
              </li>
              <li class="header-bar__module cart header_cart">
                <!-- Mini Cart Start -->
                <div class="baskettop">
                  <div class="wrapper-top-cart">
                    <a href="/cart" id="ToggleDown" class="icon-cart-arrow">
                      <svg class="cart" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M80.6,63.9c0.1-0.1,0.1-0.2,0.2-0.3c0,0,0-0.1,0.1-0.1c0.1-0.1,0.1-0.3,0.2-0.4V63c0-0.1,0.1-0.2,0.1-0.4l0.1-0.3l7.4-26.1 c0.5-1.8-0.8-3.5-2.7-3.6c-0.3,0-0.5,0-0.5,0c-0.1,0-0.1,0-0.2,0H56.5h-1.3H27.7c-0.1,0-0.1,0-0.2,0l-2.7-9.6 c-0.6-2.5-2.4-4.2-4.5-4.2h-7c-1,0-2,0.9-2.1,2.2c-0.1,1.5,0.8,2.8,2,2.8h7.1c0.3,0,0.6,0.3,0.7,0.7l10.7,37.7l0.1,0.3 c0,0.1,0.1,0.2,0.1,0.4V63c0.1,0.1,0.1,0.3,0.2,0.4c0,0,0,0.1,0.1,0.1c0.1,0.1,0.1,0.2,0.2,0.3c0,0.1,0.1,0.1,0.1,0.2 c0.1,0.1,0.2,0.2,0.2,0.2l0.1,0.1c0.5,0.4,1.1,0.7,1.7,0.7c0,0,0,0,0.1,0c8.8,0,42.4,0,43.9,0h0.1c0.6,0,1.2-0.3,1.7-0.7l0.1-0.1 C80.5,64,80.6,64,80.6,63.9C80.5,64,80.6,64,80.6,63.9z M35.3,60.6l-6.6-23.4h26.5h1.3h27.7l-6.6,23.4H35.3z"/><path d="M42.1,68.3c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S45.7,68.3,42.1,68.3z M42.1,77.1c-1.3,0-2.3-1-2.3-2.3 s1-2.3,2.3-2.3s2.3,1,2.3,2.3C44.4,75.9,43.4,77.1,42.1,77.1z"/><path d="M69.9,68.3c-3.6,0-6.5,2.9-6.5,6.5s2.9,6.5,6.5,6.5s6.5-2.9,6.5-6.5S73.4,68.3,69.9,68.3z M69.9,77.1c-1.3,0-2.3-1-2.3-2.3 s1-2.3,2.3-2.3c1.3,0,2.3,1,2.3,2.3C72.1,75.9,71.1,77.1,69.9,77.1z"/></svg>
                      <div class="detail">
                        <div id="cartCount">
                          0
                        </div>
                        <span class="cartCountspan">Item</span>
                        <div id="minicart_total">
                          <span> <span class=money>$0.00</span></span>
                        </div>
                      </div>
                    </a>
                    <div id="slidedown-cart" style="display:none">
                      <!-- <h3>Shopping cart</h3>-->
                      <div class="no-items">
                        <p>Your cart is currently empty!</p>
                        <p class="text-continue"><a class="btn" href="javascript:void(0)">Continue shopping</a></p>
                      </div>
                      <div class="has-items">
                        <ul class="mini-products-list">
                        </ul>
                        <div class="summary">
                          <p class="total">
                            <span class="label">Cart total :</span>
                            <span class="price"><span class=money>$0.00</span></span>
                          </p>
                        </div>
                        <div class="actions">
                          <button class="btn" onclick="window.location = '/checkout'"><i class="fas fa-check"></i>Check Out</button>
                          <button class="btn text-cart" onclick="window.location = '/cart'"><i class="fas fa-shopping-basket"></i>View Cart</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> <!-- End Top Header -->
              </li>
              <li class="customer_account">
                <div class="header-account_links">
                  <ul>
                    <li>
                      <a href="/account/login" title="Log in" data-value="value 1">
                        <svg class="account" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 120 150" style="enable-background:new 0 0 120 120;" xml:space="preserve"><g><path d="M87.1,60.3C80.8,68.4,71,73.5,60,73.5s-20.8-5.2-27.1-13.2C19.7,64.3,10,76.6,10,91.1v15.8c0,1.9,1.6,3.5,3.5,3.5h93 c1.9,0,3.5-1.6,3.5-3.5V91.1C110,76.6,100.3,64.3,87.1,60.3z"/><g><path d="M89.5,39.1c0,16.2-13.2,29.5-29.5,29.5S30.5,55.3,30.5,39.1C30.5,22.8,43.8,9.6,60,9.6S89.5,22.8,89.5,39.1z"/></g></g></svg>
                      </a>
                    </li>


                  </ul>

                </div>

              </li>
              <li class="header-mobile">
                <div class="menu-block visible-phone"><!-- start Navigation Mobile -->
                  <div id="showLeftPush">
                    <i class="fa fa-bars" aria-hidden="true"> </i>
                  </div>
                </div><!-- end Navigation Mobile -->
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
