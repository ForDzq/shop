<template>
  <header class="header">
    <slot name="left"></slot>
    <a href="javascript:;" class="header_title">
      <span class="header_title_text ellipsis">{{title}}</span>
    </a>
    <slot name="right"></slot>
  </header>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Header',
    props: {
      title: String
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .header
    background-color #02a774
    position fixed
    left 0
    right 0
    top 0
    width 100%
    height 45px
    .header_search
      position absolute
      left 15px
      top 50%
      transform translateY(-50%)
      width 10%
      height 50%
      .icon-sousuo
        font-size 25px
        color #fff
    .header_title
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      width 50%
      color #ffffff
      text-align center
      .header_title_text
        font-size 20px
        color #ffffff
        display block
    .header_login
      font-size 14px
      color #ffffff
      position absolute
      right 15px
      top 50%
      transform translateY(-50%)
      .header_login_text
        color #fff       
</style>