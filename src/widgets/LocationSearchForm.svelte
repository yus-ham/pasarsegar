<script>
</script>

<style>
  /* Search block */
  .header-type-2 .header-search input#search{ border-left:none; }
  @media screen and (min-width: 320px) and (max-width: 767px){.header-type-2 .header-search input#search{border-left:1px solid}}
  .header-type-2 .header-search{ width:70%;}
  @media screen and (min-width: 320px) and (max-width: 767px){.header-type-2 .header-search{width:100%;}}
  .header-type-2 .header-all--collections ul li:not(.init){ background:#f7f7f7; border-color:#eaeaea}
  .header-type-2 .header-all--collections ul.inline-list,.header-type-2 .header-search input#search{ border-color:#cecece}
  .header-type-2 .header-all--collections ul.inline-list:before{ background:#cecece}
  .header-type-2 .header-search input#search,.header-type-2 .results-box {color:#000;background:#ffffff;}
  /*.header-type-2 .header-search span, .header-type-2 .header-search .res_btn,.header-mobile #showLeftPush {color:;background:none;}*/
  /*.header-type-2 .header-search span:hover, .header-type-2 .header-search .res_btn:hover,.header-mobile #showLeftPush:hover {color:;background:none;}*/
  .header-type-2 .header-search button,.vetical-nav-with-search .dropdown { color:#ffffff;background:#89c74a;}
  .header-type-2 .header-search button:hover { color:#ffffff;background:#89c74a;}
  /*.header-type-2 .header-all--collections { background:#89c74a;color:#000000;}*/
  .header-type-2 .header-all--collections ul li a { color:#000000; }
  .header-type-2 .header-search input#search::-webkit-input-placeholder { /* Chrome/Opera/Safari */ color:#000;}
  .header-type-2 .header-search input#search::-moz-placeholder { /* Firefox 19+ */ color:#000;}
  .header-type-2 .header-search input#search:-ms-input-placeholder { /* IE 10+ */ color:#000;}
  .header-type-2 .header-search input#search:-moz-placeholder { /* Firefox 18- */ color:#000;}
  /* Header borders */
  .header-type-2 .top_bar ul li:last-child,.header-type-11 .top_bar li:last-child span,.header-type-11 .top_bar li:last-child a { border-right:none; }
  .header-all--collections ul {
    height: 30px;
    width: 100%;float:left;
  }
  .header-all--collections ul li { padding: 5px 10px; z-index: 2; }
  .header-all--collections li.init { cursor: pointer; }
</style>

<div id="shopify-section-vetical-nav-with-search" class="shopify-section vetical-nav-with-search header-type-2">
  <div class="grid-uniform">
    <div class="container">
      <div class="grid__item wide--three-quarters medium--grid__item">
        <div class="slidersearch search-categories">
          <div class="search-categories-section">
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
