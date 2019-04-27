<template>
  <div>
    my first demo ...
    <draggable>
      <div class="text">好的代码像粥一样，都是用时间熬出来的</div>
      <div class="text1">好的代码像粥一样，都是用时间熬出来的</div>
    </draggable>
    <draggable v-model="list">
      <transition-group tag="ul">
        <div class="drag" v-for="item in list" :key="item">{{item}}</div>
      </transition-group>
    </draggable>
    <el-button type="primary" @click="flag=!flag" class="animated zoomInDown">button</el-button>
    <transition enter-active-class="animated bounceIn"
      leave-active-class="animated bounceOut">
      <h3 v-if="flag">坏蛋，坏蛋，大坏蛋~~~</h3>
    </transition>
  </div>
</template>


<script>
import Mock from 'mockjs'
// import draggable from 'vuedraggable'

export default {
  name: 'HelloWorld',
  components: {
    // draggable
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: [1, 2, 3, 4, 5],
      flag: true
    }
  },
  created() {
    console.log('mock: ', Mock.mock('@cname()'))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  
  .drag
    border: 1px solid red
    margin: 10px
    width: 100px
    height: 100px
    line-height: 100px
    transition: all .3s

  .text
    height: 100px
    line-height: 100px
    background: #e68d32
    color: #eed
    font-size: 28px
    font-weight: bold
    // text-shadow: 3px -1px 1px #000
    text-shadow:
      1px 1px 0 #CCC, 
      2px 2px 0 #CCC,
      3px 3px 0 #444, 
      4px 4px 0 #444, 
      5px 5px 0 #444, 
      6px 6px 0 #444;
  .text1
    height: 100px
    line-height: 100px
    background: #ddd3c2
    color: #f1ebe5
    font-size: 28px
    font-weight: bold
    // text-shadow: 3px -1px 1px #000
    text-shadow:
      -1px -2px 1px #fff,
      -2px -4px 3px #ece4d8,
      -1px 4px 10px #791b1b
    // text-shadow:
    //   1px -2px 1px #fff,
    //   2px -4px 2px #ece4d8,
    //   1px 4px 10px #791b1b

</style>