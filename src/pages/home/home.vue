<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <!-- <home-recommend :list="recommendList"></home-recommend> -->
    <home-favourite :favList='recommendList'></home-favourite>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
import {getHome} from '@/api'
import HomeHeader from './components/Header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeFavourite from './components/Favourite'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeFavourite,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    async getData(){
      let {iconList,recommendList,swiperList,weekendList} = await getHome()
      this.iconList = iconList
      this.recommendList = recommendList
      this.swiperList = swiperList
      this.weekendList = weekendList
    }
  },
  mounted () {
    this.getData()
  }
}
console.log(this.$store)
</script>

<style lang='stylus' scoped>

</style>
