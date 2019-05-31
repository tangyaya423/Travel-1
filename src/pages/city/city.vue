<template>
  <div class="city">
    <head-city></head-city>
    <search-city :Cities="Cities"></search-city>
    <city-list
      :hotCities="hotCities"
      :Cities="Cities"
      :letter="letter"
    ></city-list>
    <right-city
      :Cities="Cities"
      @change="handLetter"
    ></right-city>
  </div>
</template>

<script>
import {getCities} from '@/api'
import HeadCity from './components/HeadCity'
import SearchCity from './components/SearchCity'
import CityList from './components/List'
import RightCity from './components/Alphabet'
import axios from 'axios'
export default {
  name: 'city',
  components: {
    HeadCity,
    SearchCity,
    CityList,
    RightCity
  },
  data () {
    return {
      hotCities: '',
      Cities: '',
      letter: ''
    }
  },
  methods: {
    async getCityInfo () {
      let {hotCities,cities} = await getCities()
      this.hotCities = hotCities
      this.Cities = cities
    },
    handLetter (letter) {
      // console.log(letter)
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
