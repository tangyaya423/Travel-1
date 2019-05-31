<template>
  <div>
    <detail-banner
      :sightName='sightName'
      :bannerImg='bannerImg'
      :gallaryImgs='gallaryImgs'
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
      <detail-card :cardInfo='cardInfo'></detail-card>
      <detail-recommend :recommendInfo='recommendInfo'></detail-recommend>
      <detail-calendar :calendarInfo='calendarInfo'></detail-calendar>
    </div>
  </div>
</template>
<script>
import {getDetails} from '@/api'
import detailBanner from './components/Banner'
import detailHeader from './components/Header'
import detailList from './components/List'
import detailCard from './components/Card'
import DetailRecommend from './components/Recommend'
import detailCalendar from './components/Calendar'
import axios from 'axios'
export default {
  name: 'Details',
  components: {
    detailBanner,
    detailHeader,
    detailList,
    detailCard,
    detailCalendar,
    DetailRecommend
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
      cardInfo: '',
      calendarInfo: '',
      recommendInfo: ''
    }
  },
  methods: {
    async getDetailsInfo () {
      let heaven =  await getDetails(this.$route.params.id)
      let {sightName,bannerImg,gallaryImgs,cardInfo,recommendInfo,calendarInfo} = await getDetails(this.$route.params.id)
      this.sightName = sightName
      this.bannerImg = bannerImg
      this.gallaryImgs = gallaryImgs
      this.cardInfo = cardInfo
      this.calendarInfo = calendarInfo
      this.recommendInfo = recommendInfo
      // console.log(heaven)
    }
  },
  activated () {
    this.getDetailsInfo()
  }
}
</script>

<style lang='stylus' scoped>
.content
  height 20rem
</style>
