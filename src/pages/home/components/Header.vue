<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe609;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe623;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.$store.state.city}}
          <span class="iconfont">&#xe615;</span>
        </div>
      </router-link>
  </div>
</template>

<script>

export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
  .header
    display flex
    height: .86rem
    background: $bgColor
    .header-left
      float: left
      padding 0 .05rem
      line-height .86rem
      margin-left .2rem
      color #fff
    .header-input
      width 5.1rem
      float left
      height .62rem
      margin-top .12rem
      background #fff
      line-height .62rem
      color #ccc
      padding-left .2rem
      margin-left .2rem
      border-radius .1rem
    .header-right
      float right
      margin-left .2rem
      // padding-right .2rem
      line-height .86rem
      color #fff
</style>
