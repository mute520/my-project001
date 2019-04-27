<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-link to="/getPublicModel">模型超市</router-link>
    <router-link to="/draggable">draggable</router-link>
    <router-link to="/sort">sort</router-link>
    <router-link to="/page/a">a页面</router-link>
    <router-link to="/page/b">b页面</router-link>
    <router-link to="/page/c">c页面</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
