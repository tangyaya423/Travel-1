<template>
  <div class="container" @click="closeGallary">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div> <!--让swiper拥有滑动效果 -->
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallary',
  props: ['imgs'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        }, 
        observer: true,
        observeParents: true
      },
    }
  },
  methods: {
    closeGallary () {
      this.$emit('close')
    }
  },
  mounted () {
      console.log(this.imgs)
  }
}
</script>

<style lang='stylus' scoped>
.container
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background #000
  .wrapper
    overflow hidden
    top:0
    bottom:0
    margin:auto
    height:0
    width:100%
    padding-bottom:62.5%
    position absolute
    .gallary-img
      width 100%
      height 100%
    .swiper-pagination
      bottom 1rem
      position fixed
      height .5rem
      color #fff
</style>
