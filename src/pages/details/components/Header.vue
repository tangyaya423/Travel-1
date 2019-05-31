<template>
  <div>
    <router-link
      tag="div" to="/"
      class="HeaderAbs"
      v-show="Headershow"
    >
      <div class="iconfont">&#xe609;</div>
    </router-link>
    <div
      class="HeaderFixed"
      v-show="!Headershow"
      :style="opacity"
    >
      景点详情
      <router-link to='/'>
        <div class="fixed-iconfont iconfont">&#xe609;</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailHeader',
  data () {
    return {
      Headershow: true,
      opacity: 0
    }
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        this.opacity = { opacity }
        opacity = opacity > 1 ? 1 : opacity
        this.Headershow = false
      } else {
        this.Headershow = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactived () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
.HeaderAbs
  position absolute
  height .8rem
  width .8rem
  top .2rem
  left .2rem
  text-align center
  line-height .8rem
  border-radius .8rem
  background rgba(0 ,0 ,0 ,.6)
  .iconfont
    color #fff
    font-size .36rem
.HeaderFixed
  z-index 66
  position fixed
  top 0
  left 0
  right 0
  height $headerHeight
  line-height $headerHeight
  background $bgColor
  color #fff
  text-align center
  font-size .32rem
  .fixed-iconfont
    position absolute
    width .64rem
    text-align center
    font-size .4rem
    top 0
    left 0
    color #fff
</style>
