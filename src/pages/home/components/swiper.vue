<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div> <!--让swiper拥有滑动效果 -->
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: ['list'],
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 将小点添加到轮播上,不传则不会显示小点
        loop: true // 让图片循环轮播
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.wrapper >>> .swiper-pagination-bullet-active // 3个>>>意为穿透 将不受scoped的限制
  background #fff !important
.wrapper
//该段代码解决加载时图片抖动的问题
  overflow hidden
  width 100%
  height 0
  padding-bottom 27% // 宽高比固定为31.25%
  .swiper-img
    width 100%
</style>
