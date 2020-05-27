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

<div id="shopify-section-1566806973913" class="shopify-section index-section">
  <div data-section-id="1566806973913" data-section-type="home-product-grid-type-23" class="home-product-grid-type-23">
    <div class="dt-sc-hr-invisible-large"></div>
    <div class="container">
      <div class="full_width_tab load-wrapper">
        <div class="border-title">
          <h2 class="section-header__title" style="color:#89c74a;">
            Our Special Products<span></span>
          </h2>
          <p class="small-title" style="color:#000">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <span style="margin-top:10px;background:url('//cdn.shopify.com/s/files/1/0108/7370/0415/files/leaf.png?v=1580303528');background-repeat:no-repeat;width:165px;height:110px;text-align:center;margin:auto;display:block;"></span>
        </div>
        <div class="grid-uniform">
          <div class="grid__item wide--one-third post-large--three-tenths large--one-third medium--grid__item small-grid__item">
            <ul class="type4__items">









              <li class="grid__item item-row medium--one-half small--one-half " id="product-1984209289279" >

                <div class="products product-hover-9">
                  <div class="product-container">





                    <a href="/collections/special-products/products/mandrain-orange" class="grid-link">
                      <div class="ImageOverlayCa"></div>
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-17.png?v=1584094184" class="featured-image" alt="Mandrain Orange">

                    </a>
                    <div class="product_right_tag ">












                    </div>
                    <div class="ImageWrapper">
                      <div class="product-button">


                        <a title="Quick View" href="javascript:void(0)" id="mandrain-orange" class="quick-view-text">
                          <i class="far fa-eye"></i>
                        </a>

                        <a title="Product Link" href="/products/mandrain-orange">
                          <i class="fas fa-link"></i>
                        </a>

                        <div class="add-to-wishlist">
                          <div class="show">
                            <div class="default-wishbutton-mandrain-orange loading"><a title="Add to wishlist" class="add-in-wishlist-js" href="mandrain-orange"><i class="far fa-heart"></i><span class="tooltip-label">Add to wishlist</span></a></div>
                            <div class="loadding-wishbutton-mandrain-orange loading" style="display: none; pointer-events: none"><a class="add_to_wishlist" href="mandrain-orange"><i class="fas fa-spinner"></i></a></div>
                            <div class="added-wishbutton-mandrain-orange loading" style="display: none;"><a title="View Wishlist" class="added-wishlist add_to_wishlist" href="/pages/wishlist"><i class="fas fa-heart"></i><span class="tooltip-label">View Wishlist</span></a></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="product-detail">
                    <ul class="sizes-list">


                    </ul>

                    <a href="/collections/special-products/products/mandrain-orange" class="grid-link__title">Mandrain Orange</a>
                    <div class="product_desc">Lorem ipsum dolor sit amet, consectetur adipisc...</div>
                    <div class="grid-link__meta">
                      <span class="shopify-product-reviews-badge" data-id="1984209289279"></span>


                      <div class="product_price">
                        <div class="grid-link__org_price" id="ProductPrice">
                          <span class=money>$123.00</span>
                        </div>
                      </div>



                    </div>


                    <form action="/cart/add" method="post" class="variants clearfix" id="cart-form-1984209289279">
                      <input type="hidden" name="id" value="15876245028927" />
                      <a title="Add to Cart" class="add-cart-btn btn">
                        Add to Cart
                      </a>
                    </form>




                  </div>

                </div>


              </li>









              <li class="grid__item item-row medium--one-half small--one-half " id="product-4508685697087" >

                <div class="products product-hover-9">
                  <div class="product-container">





                    <a href="/collections/special-products/products/watermelon" class="grid-link">
                      <div class="ImageOverlayCa"></div>
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-1.png?v=1583912659" class="featured-image" alt="Watermelon">

                    </a>
                    <div class="product_right_tag ">












                    </div>
                    <div class="ImageWrapper">
                      <div class="product-button">


                        <a title="Quick View" href="javascript:void(0)" id="watermelon" class="quick-view-text">
                          <i class="far fa-eye"></i>
                        </a>

                        <a title="Product Link" href="/products/watermelon">
                          <i class="fas fa-link"></i>
                        </a>

                        <div class="add-to-wishlist">
                          <div class="show">
                            <div class="default-wishbutton-watermelon loading"><a title="Add to wishlist" class="add-in-wishlist-js" href="watermelon"><i class="far fa-heart"></i><span class="tooltip-label">Add to wishlist</span></a></div>
                            <div class="loadding-wishbutton-watermelon loading" style="display: none; pointer-events: none"><a class="add_to_wishlist" href="watermelon"><i class="fas fa-spinner"></i></a></div>
                            <div class="added-wishbutton-watermelon loading" style="display: none;"><a title="View Wishlist" class="added-wishlist add_to_wishlist" href="/pages/wishlist"><i class="fas fa-heart"></i><span class="tooltip-label">View Wishlist</span></a></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="product-detail">
                    <ul class="sizes-list">


                      <li class="size-item">
                        <a title="3 kg" href="/products/watermelon?variant=31998311465023">
                          3 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="2 kg" href="/products/watermelon?variant=31998312874047">
                          2 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="1 kg" href="/products/watermelon?variant=31998313529407">
                          1 kg
                        </a>
                      </li>




                    </ul>

                    <a href="/collections/special-products/products/watermelon" class="grid-link__title">Watermelon</a>
                    <div class="product_desc">Lorem ipsum dolor sit amet, consectetur adipisc...</div>
                    <div class="grid-link__meta">
                      <span class="shopify-product-reviews-badge" data-id="4508685697087"></span>


                      <div class="product_price">
                        <div class="grid-link__org_price" id="ProductPrice">
                          <span class=money>$100.00</span>
                        </div>
                      </div>



                    </div>


                    <form action="/cart/add" method="post" class="variants clearfix" id="cart-form-4508685697087">
                      <input type="hidden" name="id" value="31998311465023" />
                      <a title="Add to Cart" class="add-cart-btn btn">
                        Add to Cart
                      </a>
                    </form>




                  </div>

                </div>


              </li>









              <li class="grid__item item-row medium--one-half small--one-half " id="product-1984208437311" >

                <div class="products product-hover-9">
                  <div class="product-container">





                    <a href="/collections/special-products/products/chicken-boneless" class="grid-link">
                      <div class="ImageOverlayCa"></div>
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-12.png?v=1584085183" class="featured-image" alt="Chicken Boneless">

                    </a>
                    <div class="product_right_tag ">












                    </div>
                    <div class="ImageWrapper">
                      <div class="product-button">


                        <a title="Quick View" href="javascript:void(0)" id="chicken-boneless" class="quick-view-text">
                          <i class="far fa-eye"></i>
                        </a>

                        <a title="Product Link" href="/products/chicken-boneless">
                          <i class="fas fa-link"></i>
                        </a>

                        <div class="add-to-wishlist">
                          <div class="show">
                            <div class="default-wishbutton-chicken-boneless loading"><a title="Add to wishlist" class="add-in-wishlist-js" href="chicken-boneless"><i class="far fa-heart"></i><span class="tooltip-label">Add to wishlist</span></a></div>
                            <div class="loadding-wishbutton-chicken-boneless loading" style="display: none; pointer-events: none"><a class="add_to_wishlist" href="chicken-boneless"><i class="fas fa-spinner"></i></a></div>
                            <div class="added-wishbutton-chicken-boneless loading" style="display: none;"><a title="View Wishlist" class="added-wishlist add_to_wishlist" href="/pages/wishlist"><i class="fas fa-heart"></i><span class="tooltip-label">View Wishlist</span></a></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="product-detail">
                    <ul class="sizes-list">


                      <li class="size-item">
                        <a title="4 kg" href="/products/chicken-boneless?variant=15876241162303">
                          4 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="1 kg" href="/products/chicken-boneless?variant=15876241195071">
                          1 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="3 kg" href="/products/chicken-boneless?variant=15876241227839">
                          3 kg
                        </a>
                      </li>




                    </ul>

                    <a href="/collections/special-products/products/chicken-boneless" class="grid-link__title">Chicken Boneless</a>
                    <div class="product_desc">Lorem ipsum dolor sit amet, consectetur adipisc...</div>
                    <div class="grid-link__meta">
                      <span class="shopify-product-reviews-badge" data-id="1984208437311"></span>


                      <div class="product_price">
                        <div class="grid-link__org_price" id="ProductPrice">
                          <span class=money>$429.00</span>
                        </div>
                      </div>



                    </div>


                    <form action="/cart/add" method="post" class="variants clearfix" id="cart-form-1984208437311">
                      <input type="hidden" name="id" value="15876241162303" />
                      <a title="Add to Cart" class="add-cart-btn btn">
                        Add to Cart
                      </a>
                    </form>




                  </div>

                </div>


              </li>
            </ul>
          </div>
          <div class="grid__item wide--one-third post-large--three-tenths large--one-third medium--grid__item small-grid__item center">
            <ul class="type4__singele_items">









              <li class="grid__item item-row medium--one-half small--one-half on-sale" id="product-4508685893695" >

                <div class="products product-hover-9">
                  <div class="product-container">





                    <a href="/collections/special-products/products/capsicum" class="grid-link">
                      <div class="featured-tag">
                        <span class="badge badge--sale">
                          <span class="gift-tag badge__text">Sale</span>
                        </span>
                      </div>
                      <div class="ImageOverlayCa"></div>
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-2_130x.png?v=1583912700" class="featured-image" alt="Capsicum">

                    </a>
                    <div class="product_right_tag offer_exist ">
                      <span class="offer-price">Save <br> <b>0% </b></span>












                    </div>
                    <div class="ImageWrapper">
                      <div class="product-button">


                        <a title="Quick View" href="javascript:void(0)" id="capsicum" class="quick-view-text">
                          <i class="far fa-eye"></i>
                        </a>

                        <a title="Product Link" href="/products/capsicum">
                          <i class="fas fa-link"></i>
                        </a>

                        <div class="add-to-wishlist">
                          <div class="show">
                            <div class="default-wishbutton-capsicum loading"><a title="Add to wishlist" class="add-in-wishlist-js" href="capsicum"><i class="far fa-heart"></i><span class="tooltip-label">Add to wishlist</span></a></div>
                            <div class="loadding-wishbutton-capsicum loading" style="display: none; pointer-events: none"><a class="add_to_wishlist" href="capsicum"><i class="fas fa-spinner"></i></a></div>
                            <div class="added-wishbutton-capsicum loading" style="display: none;"><a title="View Wishlist" class="added-wishlist add_to_wishlist" href="/pages/wishlist"><i class="fas fa-heart"></i><span class="tooltip-label">View Wishlist</span></a></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="product-detail">
                    <ul class="sizes-list">


                      <li class="size-item">
                        <a title="5 kg" href="/products/capsicum?variant=31998112759871">
                          5 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="3 kg" href="/products/capsicum?variant=31998113939519">
                          3 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="1 kg" href="/products/capsicum?variant=31998114496575">
                          1 kg
                        </a>
                      </li>




                    </ul>

                    <a href="/collections/special-products/products/capsicum" class="grid-link__title">Capsicum</a>
                    <div class="product_desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure...</div>
                    <div class="grid-link__meta">
                      <span class="shopify-product-reviews-badge" data-id="4508685893695"></span>


                      <div class="product_price">
                        <div class="grid-link__org_price" id="ProductPrice">
                          <span class=money>$400.00</span>
                        </div>
                      </div>

                      <del class="grid-link__sale_price" id="ComparePrice">
                        <span class=money>$401.00</span>
                      </del>



                    </div>


                    <form action="/cart/add" method="post" class="variants clearfix" id="cart-form-4508685893695">
                      <input type="hidden" name="id" value="31998112759871" />
                      <a title="Add to Cart" class="add-cart-btn btn">
                        Add to Cart
                      </a>
                    </form>




                  </div>

                </div>


              </li>
            </ul>
          </div>
          <div class="grid__item wide--one-third post-large--three-tenths large--one-third medium--grid__item small-grid__item">
            <ul class="type4__items">









              <li class="grid__item item-row medium--one-half small--one-half " id="product-4510400675903" >

                <div class="products product-hover-9">
                  <div class="product-container">





                    <a href="/collections/special-products/products/fish-curry" class="grid-link">
                      <div class="ImageOverlayCa"></div>
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-13.png?v=1584085502" class="featured-image" alt="Fish Curry">

                    </a>
                    <div class="product_right_tag ">












                    </div>
                    <div class="ImageWrapper">
                      <div class="product-button">


                        <a title="Quick View" href="javascript:void(0)" id="fish-curry" class="quick-view-text">
                          <i class="far fa-eye"></i>
                        </a>

                        <a title="Product Link" href="/products/fish-curry">
                          <i class="fas fa-link"></i>
                        </a>

                        <div class="add-to-wishlist">
                          <div class="show">
                            <div class="default-wishbutton-fish-curry loading"><a title="Add to wishlist" class="add-in-wishlist-js" href="fish-curry"><i class="far fa-heart"></i><span class="tooltip-label">Add to wishlist</span></a></div>
                            <div class="loadding-wishbutton-fish-curry loading" style="display: none; pointer-events: none"><a class="add_to_wishlist" href="fish-curry"><i class="fas fa-spinner"></i></a></div>
                            <div class="added-wishbutton-fish-curry loading" style="display: none;"><a title="View Wishlist" class="added-wishlist add_to_wishlist" href="/pages/wishlist"><i class="fas fa-heart"></i><span class="tooltip-label">View Wishlist</span></a></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="product-detail">
                    <ul class="sizes-list">


                      <li class="size-item">
                        <a title="1 kg" href="/products/fish-curry?variant=31928731369535">
                          1 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="2 kg" href="/products/fish-curry?variant=31998255759423">
                          2 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="5 kg" href="/products/fish-curry?variant=31998256316479">
                          5 kg
                        </a>
                      </li>




                    </ul>

                    <a href="/collections/special-products/products/fish-curry" class="grid-link__title">Fish Curry</a>
                    <div class="product_desc">Lorem ipsum dolor sit amet, consectetur adipisc...</div>
                    <div class="grid-link__meta">
                      <span class="shopify-product-reviews-badge" data-id="4510400675903"></span>


                      <div class="product_price">
                        <div class="grid-link__org_price" id="ProductPrice">
                          <span class=money>$459.00</span>
                        </div>
                      </div>



                    </div>


                    <form action="/cart/add" method="post" class="variants clearfix" id="cart-form-4510400675903">
                      <input type="hidden" name="id" value="31928731369535" />
                      <a title="Add to Cart" class="add-cart-btn btn">
                        Add to Cart
                      </a>
                    </form>




                  </div>

                </div>


              </li>









              <li class="grid__item item-row medium--one-half small--one-half on-sale" id="product-1984208601151" >

                <div class="products product-hover-9">
                  <div class="product-container">





                    <a href="/collections/special-products/products/flower-mushroom" class="grid-link">
                      <div class="featured-tag">
                        <span class="badge badge--sale">
                          <span class="gift-tag badge__text">Sale</span>
                        </span>
                      </div>
                      <div class="ImageOverlayCa"></div>
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-9.png?v=1583927695" class="featured-image" alt="Flower Mushroom">

                    </a>
                    <div class="product_right_tag offer_exist ">
                      <span class="offer-price">Save <br> <b>56% </b></span>












                    </div>
                    <div class="ImageWrapper">
                      <div class="product-button">


                        <a title="Quick View" href="javascript:void(0)" id="flower-mushroom" class="quick-view-text">
                          <i class="far fa-eye"></i>
                        </a>

                        <a title="Product Link" href="/products/flower-mushroom">
                          <i class="fas fa-link"></i>
                        </a>

                        <div class="add-to-wishlist">
                          <div class="show">
                            <div class="default-wishbutton-flower-mushroom loading"><a title="Add to wishlist" class="add-in-wishlist-js" href="flower-mushroom"><i class="far fa-heart"></i><span class="tooltip-label">Add to wishlist</span></a></div>
                            <div class="loadding-wishbutton-flower-mushroom loading" style="display: none; pointer-events: none"><a class="add_to_wishlist" href="flower-mushroom"><i class="fas fa-spinner"></i></a></div>
                            <div class="added-wishbutton-flower-mushroom loading" style="display: none;"><a title="View Wishlist" class="added-wishlist add_to_wishlist" href="/pages/wishlist"><i class="fas fa-heart"></i><span class="tooltip-label">View Wishlist</span></a></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="product-detail">
                    <ul class="sizes-list">


                      <li class="size-item">
                        <a title="2 kg" href="/products/flower-mushroom?variant=15876241653823">
                          2 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="3 kg" href="/products/flower-mushroom?variant=15876241686591">
                          3 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="1 kg" href="/products/flower-mushroom?variant=15876241719359">
                          1 kg
                        </a>
                      </li>




                    </ul>

                    <a href="/collections/special-products/products/flower-mushroom" class="grid-link__title">Flower Mushroom</a>
                    <div class="product_desc">Lorem ipsum dolor sit amet, consectetur adipisc...</div>
                    <div class="grid-link__meta">
                      <span class="shopify-product-reviews-badge" data-id="1984208601151"></span>


                      <div class="product_price">
                        <div class="grid-link__org_price" id="ProductPrice">
                          <span class=money>$129.00</span>
                        </div>
                      </div>

                      <del class="grid-link__sale_price" id="ComparePrice">
                        <span class=money>$295.00</span>
                      </del>



                    </div>


                    <form action="/cart/add" method="post" class="variants clearfix" id="cart-form-1984208601151">
                      <input type="hidden" name="id" value="15876241653823" />
                      <a title="Add to Cart" class="add-cart-btn btn">
                        Add to Cart
                      </a>
                    </form>




                  </div>

                </div>


              </li>









              <li class="grid__item item-row medium--one-half small--one-half " id="product-4510404542527" >

                <div class="products product-hover-9">
                  <div class="product-container">





                    <a href="/collections/special-products/products/butter-cookies" class="grid-link">
                      <div class="ImageOverlayCa"></div>
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/products/Shop-14_ff25c471-0a81-4502-8a8f-aaa077f13baf.png?v=1584085876" class="featured-image" alt="Butter Cookies">

                    </a>
                    <div class="product_right_tag ">












                    </div>
                    <div class="ImageWrapper">
                      <div class="product-button">


                        <a title="Quick View" href="javascript:void(0)" id="butter-cookies" class="quick-view-text">
                          <i class="far fa-eye"></i>
                        </a>

                        <a title="Product Link" href="/products/butter-cookies">
                          <i class="fas fa-link"></i>
                        </a>

                        <div class="add-to-wishlist">
                          <div class="show">
                            <div class="default-wishbutton-butter-cookies loading"><a title="Add to wishlist" class="add-in-wishlist-js" href="butter-cookies"><i class="far fa-heart"></i><span class="tooltip-label">Add to wishlist</span></a></div>
                            <div class="loadding-wishbutton-butter-cookies loading" style="display: none; pointer-events: none"><a class="add_to_wishlist" href="butter-cookies"><i class="fas fa-spinner"></i></a></div>
                            <div class="added-wishbutton-butter-cookies loading" style="display: none;"><a title="View Wishlist" class="added-wishlist add_to_wishlist" href="/pages/wishlist"><i class="fas fa-heart"></i><span class="tooltip-label">View Wishlist</span></a></div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div class="product-detail">
                    <ul class="sizes-list">


                      <li class="size-item">
                        <a title="2 kg" href="/products/butter-cookies?variant=31928749555775">
                          2 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="3 kg" href="/products/butter-cookies?variant=31928749588543">
                          3 kg
                        </a>
                      </li>


                      <li class="size-item">
                        <a title="1 kg" href="/products/butter-cookies?variant=31928749621311">
                          1 kg
                        </a>
                      </li>




                    </ul>

                    <a href="/collections/special-products/products/butter-cookies" class="grid-link__title">Butter Cookies</a>
                    <div class="product_desc">Lorem ipsum dolor sit amet, consectetur adipisc...</div>
                    <div class="grid-link__meta">
                      <span class="shopify-product-reviews-badge" data-id="4510404542527"></span>


                      <div class="product_price">
                        <div class="grid-link__org_price" id="ProductPrice">
                          <span class=money>$319.00</span>
                        </div>
                      </div>



                    </div>


                    <form action="/cart/add" method="post" class="variants clearfix" id="cart-form-4510404542527">
                      <input type="hidden" name="id" value="31928749555775" />
                      <a title="Add to Cart" class="add-cart-btn btn">
                        Add to Cart
                      </a>
                    </form>




                  </div>

                </div>


              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="dt-sc-hr-invisible-large"></div>
  </div>
</div>
