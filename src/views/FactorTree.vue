<template>
  <div>
    <div style="text-align:left">{{list}}</div>
    <draggable v-model="list" tag="ul">
      <transition-group type="transition">
        <li v-for="item in list" :key="item">{{item}}</li>
      </transition-group>
    </draggable>
    <draggable tag="ul" v-model="list">
      <li>drag1</li>
      <li>drag2</li>
      <li>drag3</li>
    </draggable>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  components: {},
  data(){
    return {
      msg: 'hello',
      list: [111, 222, 333, 4444]
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/variable.styl'

// ul
//   margin: 0
//   padding: 0
//   list-style: none 
  li
    width: 200px
    height: 50px
    line-height: 50px
    border: 1px solid red
    margin: 10px
    background: $mainGray
    color: $mainColor
    cursor: pointer
    transition: all .5s
  
</style>