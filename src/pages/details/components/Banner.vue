<template>
  <div>
    <div class="banner" @click="openGallary">
      <img class="banner-pic" :src="this.bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-num">
          <span class="iconfont">&#xe637;</span>
          {{gallaryImgs.length}}
          </div>
      </div>
    </div>
    <fade-animation>
      <commn-gallary
        :imgs="gallaryImgs"
        v-show="showGallary"
        @close="close"
      ></commn-gallary>
    </fade-animation>
  </div>
</template>
<script>
import commnGallary from 'commn/gallary/Gallary'
import FadeAnimation from 'commn/Fade/FadeAnimation'
export default {
  name: 'detailBanner',
  components: {
    commnGallary,
    FadeAnimation
  },
  props: ['gallaryImgs', 'sightName', 'bannerImg'],
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    openGallary () {
      this.showGallary = true
    },
    close () {
      this.showGallary = false
    }
  },
  created () {
      console.log(this.bannerImg)
  }
}
</script>

<style lang='stylus' scoped>
.banner
  overflow hidden
  padding-bottom 54.9%
  height 0
  position relative
  .banner-pic
    width 100%
  .banner-info
    display flex
    position absolute
    line-height 0.6rem
    right 0
    left 0
    bottom 0
    background-image:linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, .2))
    color #fff
    .banner-title
      padding  0 0.2rem
      flex 1
    .banner-num
      background rgba(0,0,0,.8)
      border-radius 0.4rem
      width 1.2rem
      line-height .6rem
      padding  0 0.2rem
      text-align center
</style>
