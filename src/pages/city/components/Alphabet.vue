<template>
  <ul class="wrapper">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="handClick"
      @touchstart="touchstarts"
      @touchmove="touchmoves"
      @touchend="touchends"
    >
    {{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'RightCity',
  props: ['Cities'],
  computed: {
    letters () {
      const letter = []
      // 遍历cities对象，获得字母下标
      for (let i in this.Cities) {
        letter.push(i)
      }
      return letter
    }
  },
  data () {
    return {
      touchstatus: false,
      startY: 0,
      Timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handClick (e) {
      this.$emit('change', e.target.innerText)
    },
    touchstarts (e) {
      this.touchstatus = true
    },
    touchmoves (e) {
      if (this.touchstatus) {
        if (this.Timer) {
          clearTimeout(this.Timer)
        }
        this.Timer = setTimeout(() => {
          const clentY = e.touches[0].clientY
          const index = Math.floor((clentY - this.startY - 79) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    touchends (e) {
      this.touchstatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~style/varibles.styl'
.wrapper
  z-index 999
  position absolute
  top 1.58rem
  right 0
  width .4rem
  bottom 0
  display flex
  flex-direction : column
  justify-content :center
  .item
    text-align: center
    line-height .4rem
    color $bgColor
</style>
