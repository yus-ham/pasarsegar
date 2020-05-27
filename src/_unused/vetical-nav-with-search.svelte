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

<div id="shopify-section-vetical-nav-with-search" class="shopify-section vetical-nav-with-search">
  <div class="grid-uniform">
    <div class="container">
      <div class="grid__item wide--one-quarter medium-down--hide">
        <div class="dropdown">
          <span id="dropbtn" class="dropdown"><i class="fa fa-bars"></i>All Departments<i class="fa fa-chevron-down"></i> </span>
          <ul class="parent dropdown-content" id="dropdown-content">
            <li ><a href="/products/apple">Organic </a>
            </li>
            <li ><a href="/products/chicken-boneless">Meat</a>
            </li>
            <li ><a href="/products/brown-rice">Food Grains</a>
            </li>
            <li ><a href="/products/badam">Nutrition</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="grid__item wide--three-quarters medium--grid__item">
        <div class="slidersearch search-categories">
          <div class="search-categories-section">
            <div class="header-all--collections list-unstyled">
              <ul class="inline-list">
                <li class="init">All Categories</li>
                <li data-value="value 1"><a href="/collections/category">Fruits </a></li>
                <li data-value="value 2"><a href="/collections/vegies">Vegetables</a></li>
                <li data-value="value 3"><a href="/collections/flour">Flour</a></li>
                <li data-value="value 4"><a href="/collections/cookies">Cookies</a></li>
                <li data-value="value 5"><a href="/collections/meat">Meat</a></li>
              </ul>
            </div>
            <div class="header-search medium--grid__item">
              <div class="ajaxsearch">
                <div class="slidersearch search-box">
                  <form action="/search" method="get" class="search-bar__table-cell search-bar__form" role="search">
                    <input type="hidden" name="type" value="product"/>
                    <input type="search" id="search" name="q" value="" placeholder="Search here" aria-label="Search here" class="search-bar__input sb-search-input"/>
                    <button class="sb-search-submit" type="submit" value="">Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
