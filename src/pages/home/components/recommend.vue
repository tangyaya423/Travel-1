<template>
  <div class="recommend">
    <div class="tittle">热销推荐</div>
     <ul class="container">
       <router-link tag='li' :to="'/details/' + item.id" class="item" v-for="item in list" :key="item.id">
           <img class="item-img" :src="item.imgUrl" alt="">
          <div class="desc">
           <h4 class="desc-tittle">{{item.title}}</h4>
           <p class="detail">{{item.comment}}</p>
           <button  class="more">查看详情</button>
         </div>
       </router-link>
     </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: ['list']
}
</script>
<style lang="stylus" scoped>
@import '~style/mixins.styl'
.recommend
  margin-top .2rem
  .tittle
    height .44rem
    width 100%
    padding 0.2rem
    background #eee
    line-height .44rem
  .container
    overflow hidden
    margin .1rem
  .item
    display flex
    height 2rem
    padding .1rem 0
    .item-img
      float left
      height 100%
      width 2rem
    .desc
      width 40rem
      flex 1
      min-width 0  //解决溢出没有变成省略号问题
      margin-left .2rem
      float left
      display inline-block
      .desc-tittle
        margin-top .2rem
        font-size .32rem
        height .44rem
        line-height .44rem
        color #212121
        ellipsis()
      .detail
        margin-top .1rem
        color #8a8787
        height .44rems
        font-size .28rem
        line-height .44rem
        ellipsis()
      .more
        margin-top .1rem
        color #fff
        background #FF8505
        padding .06rem .2rem
        border-radius .1rem
        letter-spacing .02rem
</style>
