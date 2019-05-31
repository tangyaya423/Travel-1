<template>
  <div class="icon-box">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icons" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt=""/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: ['list'],
  data () {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }

  }
}
</script>

<style scoped lang="stylus">
@import '~style/varibles.styl'
@import '~style/mixins.styl'
.icon-box
  overflow  hidden
  width 100%
  height 0
  padding-bottom 49.4%
  .icons
    position relative
    float left
    width 25%
    height 0
    padding-bottom 25%
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      .icon-img-content
        height 100%
        box-sizing border-box
        padding .1rem
        display block
        margin 0 auto
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      text-align center
      line-height .44rem
      color $descColor
      ellipsis()
</style>
