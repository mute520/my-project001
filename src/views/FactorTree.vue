<template>
  <div class="wrap">
    
    <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;" size="small">
      <el-radio-button label="left"></el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
    </el-radio-group>
    <div class="ability general" v-show="tabPosition==='left'">
      <ul class="from-factor">
        <li class="header">
          <h3>从因子</h3>
          <span><i class="iconfont icon-add"></i></span>
        </li>
        <li v-for="item in 4" :key="item" tabindex="1">
          Java能力包
        </li>
      </ul>
      <ul class="issues">
        <li class="header">
          <h3>问题</h3>
          <span><i class="iconfont icon-add"></i></span>
        </li>
        <li>question</li>
      </ul>
    </div>
    <div class="ability major" v-show="tabPosition==='right'">
      <ul class="from-factor">
        <li></li>
      </ul>
      <ul class="time-factor">
        <li></li>
      </ul>
      <ul class="issues">
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import axios from 'axios'
export default {
  components: {},
  data(){
    return {
      msg: 'hello',
      list: [111, 222, 333, 4444],
      num: '2',
      tabPosition: 'left'
    }
  },
  mounted() {
    let root = process.env.BASE_API
    console.log('打印的地址：',root)
  },
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/style/variable.styl'

.general
.major

.wrap >>>
  text-align: left
  .el-radio-button__orig-radio:checked+.el-radio-button__inner
    color: #4872FF;
    background-color: #dae2fc;
    border-color: #409EFF;
    box-shadow: -1px 0 0 0 #409EFF
  .el-radio-button__inner
    padding-left: 30px
    padding-right: 30px
// .el-radio-button

.ability
  display: flex
  ul
    .header
      display: flex
      justify-content: space-between
      align-items: center
      padding: 0 20px
      font-size: 14px
      // h3
      span
        height: 22px
        line-height: 22px
        padding: 0 25px
        background: #b3c3fa
        border: 1px solid $mainColor
        border-radius: 4px
        color: #fff
      & ~ li:hover
        background: #dde3f8
        transition: all .5s
      & ~ li:focus
        background: #dde3f8 
.from-factor
  width: 285px
  height: 56px
  border: 1px solid red
.issues
  // width: 285px
  flex-grow: 1
  height: 56px
  border: 1px solid red
  
</style>