<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <div class="iconfont">&#xe609;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeadCity'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.header
position relative
  overflow hidden
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  color #fff
  text-align center
  font-size .32rem
  .iconfont
    position absolute
    width .64rem
    text-align center
    font-size .4rem
    top 0
    left 0
    color #fff
</style>
