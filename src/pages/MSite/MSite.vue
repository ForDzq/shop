<template>
  <div class="msite">
    <!-- 头部 -->
    <Header title="首页">
      <a href="javascript:;" class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </a>
      <a href="javascript:;" class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </a>
    </Header>
    <!-- 导航 -->
    <nav class="msite_nav border-1px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to_food">
              <div class="food_container">
                <img src="./images/nav/1.jpg" alt="食物导航图片">
              </div>
              <span>甜品饮品</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!-- 商家列表 -->
    <ShopList class="shopListScroll"></ShopList>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.css'
  import ShopList from '../../components/ShopList/ShopList'
  export default {
    name: 'MSite',
    components: {
      ShopList
    },
    mounted () {
      new Swiper('.swiper-container',{
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../common/stylus/mixins.styl'
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #ffffff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
