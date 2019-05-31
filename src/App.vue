//单文件组件,后缀名为.vue
<template>
  <div id="app">
    <keep-alive exclude="details">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
