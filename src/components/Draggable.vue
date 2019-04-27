<template>
  <div>
    <draggable v-model="list">
      <transition-group appear tag="nav">
        <div v-for="item in list" :key="item.userId" class="dragBox">{{item.userId}}</div>
        <!-- <el-button v-for="(item,i) in list" :key="i" type="primary">{{item.userId}}</el-button> -->
      </transition-group>
    </draggable>
    <span v-for="(item,i) in list" :key="i">{{item}}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {'userId': 1, name: 'Tom'},
        {'userId': 2, name: 'Jone'},
        {'userId': 3, name: 'Lyle'},
        {'userId': 4, name: 'Kite'},
      ]
    }
  }
}
</script>

<style scoped lang="stylus">

.dragBox
  width: 200px
  height: 50px
  line-height: 50px
  border: 1px solid red
  margin: 10px auto
  transition: all .5s

  //   /** 插入过程 **/
  // .list-enter-active{
  //   transition: all 1s;
  // }
  // /** 移除过程 **/
  // .list-leave-active {
  //   transition: all 1s;
  // }
  // /*** 开始插入、移除结束的位置变化 ***/
  // .list-enter, .list-leave-to {
  //   opacity: 0;
  //   transform: translateY(30px);
  // }
  
</style>