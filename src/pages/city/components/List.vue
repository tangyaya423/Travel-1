<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="nowCity-wrap">
          <div class="nowCity">
            <div class="nowCity-button">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="nowCity-wrap">
          <div class="nowCity"
            v-for="item in hotCities"
            @click="hotClick(item.name)"
            :key="item.id">
            <div class="nowCity-button" style="color:#333;border-color:rgb(169, 167, 167) ">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
       v-for="(item ,key) in Cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list" v-for="innerItem in item" :key="innerItem.id">
          <li class="item border-bottom" @click="hotClick(innerItem.name)">{{innerItem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  props: ['hotCities', 'Cities', 'letter'],
  methods: {
    hotClick (city) {
      this.$store.commit('changeHotCity', city)
      this.$router.push('/')
    }
  },
  watch: {
    letter (letter) {
      // console.log(letter)
      const element = this.$refs[this.letter][0]
      // console.log(element)
      if (this.letter) {
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.border-topbottom
  &:before
    border-color #ccc
  &:after
    border-color #ccc
.border-bottom
  &:before
    border-color #ccc
.list
  position absolute
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0
  .area
    .title
      height .44rem
      font-size .3rem
      line-height .44rem
      background #eee
      padding .2rem
      color #666
    .nowCity-wrap
      padding .1rem .6rem .1rem .1rem
      overflow hidden
      .nowCity
        width 33.3%
        float left
        .nowCity-button
          color $bgColor
          margin .2rem
          padding .2rem
          text-align center 0
          border .03rem solid $bgColor
          border-radius .06rem
          text-align center
    .item-list
      .item
        height .76rem
        line-height .76rem
        padding-left .1rem
</style>
