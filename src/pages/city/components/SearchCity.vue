<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="城市名称或拼音">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="hotClick(item.name)"
        >{{item.name}}</li>
        <li class="search-item border-bottom" v-show="nodata">没有匹配选项</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'SearchCity',
  props: ['Cities'],
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  methods: {
    hotClick (city) {
      this.$store.commit('changeHotCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    nodata () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.Cities) {
          this.Cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 ||
             value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.search
  position relative
  height .72rem
  padding 0 .1rem
  background $bgColor
  .search-input
    box-sizing border-box
    height .62rem
    width 100%
    text-align center
    padding 0 .1rem
    line-height .62rem
    border-radius .06rem
    color #555
.search-content
  z-index 9999
  position absolute
  overflow hidden
  top 1.58rem
  left 0
  right 0
  bottom 0
  background #eee
  .search-item
    line-height .70rem
    padding-left .2rem
    background #fff
</style>
