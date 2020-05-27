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

<div id="shopify-section-1566816448043" class="shopify-section">
  <div data-section-id="1566816448043" data-section-type="blog-post-type-8" class="blog-post-type-8">
    <div class="container">
      <div class="blog-post">
        <div class="grid">
          <div class="section-header section-header--small text-center">

            <div class="border-title wow pulse">
              <h2 class="section-header__title" style="color:#89c74a;">
                Our Latest News
              </h2>
              <div class="short-desc"> <p style="color:#000;">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
              <span style="margin-top:10px;background:url('//cdn.shopify.com/s/files/1/0108/7370/0415/files/leaf.png?v=1580303528');background-repeat:no-repeat;width:165px;height:110px;text-align:center;margin:auto;display:block;"></span>
            </div>
          </div>
          <div class="grid__item wide--one-half post-large--one-half large--one-whole medium--grid__item small-grid__item wow fadeInLeft blog-left">
            <div class="home-blog blog-section">
              <div class="article-item grid__item">
                <div class="article ">
                  <div class="home-blog-image ">
                    <a href="/blogs/news/best-in-quality-fresh-meat-seafood">
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/articles/blog-1_49ce4b16-fb0a-488e-a203-3a1a84091ced_600x.jpg?v=1580990429" alt="Best In Quality Fresh Meat & Seafood" />
                    </a>
                  </div>
                  <div class="blog-description" style="background-color:#fff;">
                    <div class="blogs-sub-title">
                      <p class="blog-date" style="color:#000;">
                        <time datetime="2020-03-26"><span class="date" style="color:#000">March 26, 2020</span></time>
                      </p>

                      <p class="author" style="color:#000">
                      </p>

                    </div>
                    <div class="home-blog-content blog-detail">

                      <h4><a href="/blogs/news/best-in-quality-fresh-meat-seafood" style="color:#000;">Best In Quality Fresh Meat & Seafood</a></h4>
                      <p style="color:#000;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna a...</p>

                      <div class="blog-btn">
                        <a class="btn" style="" href="/blogs/news/best-in-quality-fresh-meat-seafood">Read more</a>
                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>
          <div class="grid__item wide--one-half post-large--one-half large--one-whole medium--grid__item small-grid__item wow fadeInLeft blog-right">
            <div class="home-blog blog-section">
              <div class="article-item grid__item">
                <div class="article ">
                  <div class="home-blog-image ">
                    <a href="/blogs/news/best-way-to-eat-dry-fruits-and-nuts">
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/articles/blog-2_500x.jpg?v=1580990472" alt="Best way to eat Dry Fruits and Nuts" />
                    </a>
                  </div>
                  <div class="blog-description" style="background-color:#fff;">
                    <div class="blogs-sub-title">
                      <p class="blog-date" style="color:#000;">
                        <time datetime="2020-03-25"><span class="date" style="color:#000">March 25, 2020</span></time>
                      </p>

                    </div>
                    <div class="home-blog-content blog-detail">

                      <h4><a href="/blogs/news/best-way-to-eat-dry-fruits-and-nuts" style="color:#000;">Best way to eat Dry Fruits and Nuts</a></h4>
                      <p style="color:#000;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo...</p>

                      <div class="blog-btn">
                        <a class="btn" style="" href="/blogs/news/best-way-to-eat-dry-fruits-and-nuts">Read more</a>
                      </div>
                    </div>

                  </div>
                </div>


              </div>
              <div class="article-item grid__item">
                <div class="article ">
                  <div class="home-blog-image ">
                    <a href="/blogs/news/fruits-vegetable-nutrients-and-health-benefits">
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/articles/blog-3_500x.jpg?v=1580990493" alt="Fruits & Vegetable Nutrients And Health Benefits" />
                    </a>
                  </div>
                  <div class="blog-description" style="background-color:#fff;">
                    <div class="blogs-sub-title">
                      <p class="blog-date" style="color:#000;">
                        <time datetime="2020-03-22"><span class="date" style="color:#000">March 22, 2020</span></time>
                      </p>

                    </div>
                    <div class="home-blog-content blog-detail">

                      <h4><a href="/blogs/news/fruits-vegetable-nutrients-and-health-benefits" style="color:#000;">Fruits & Vegetable Nutrients And Health Benefits</a></h4>
                      <p style="color:#000;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo...</p>

                      <div class="blog-btn">
                        <a class="btn" style="" href="/blogs/news/fruits-vegetable-nutrients-and-health-benefits">Read more</a>
                      </div>
                    </div>

                  </div>
                </div>


              </div>
              <div class="article-item grid__item">
                <div class="article ">
                  <div class="home-blog-image ">
                    <a href="/blogs/news/go-early-for-shopping-the-freshest-food">
                      <img src="//cdn.shopify.com/s/files/1/0108/7370/0415/articles/blog-4_500x.jpg?v=1580990409" alt="Go Early For Shopping The Freshest food" />
                    </a>
                  </div>
                  <div class="blog-description" style="background-color:#fff;">
                    <div class="blogs-sub-title">
                      <p class="blog-date" style="color:#000;">
                        <time datetime="2020-03-21"><span class="date" style="color:#000">March 21, 2020</span></time>
                      </p>

                    </div>
                    <div class="home-blog-content blog-detail">

                      <h4><a href="/blogs/news/go-early-for-shopping-the-freshest-food" style="color:#000;">Go Early For Shopping The Freshest food</a></h4>
                      <p style="color:#000;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo...</p>

                      <div class="blog-btn">
                        <a class="btn" style="" href="/blogs/news/go-early-for-shopping-the-freshest-food">Read more</a>
                      </div>
                    </div>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="dt-sc-hr-invisible-medium"></div>
  </div>
</div>
