<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title">
        <span class="item-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'detailList',
  props: ['list']
}
</script>

<style lang='stylus' scoped>
.item
  position relative
  .item-title
    line-height .8rem
    top .2rem
    padding 0 .9rem
  .item-icon
      display: inline-block
      position: absolute
      width: .36rem
      height: .36rem
      top: .26rem
      left: .4rem
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children
    padding 0 .3rem
</style>
