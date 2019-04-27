<template>
  <div class="wrap">
    <!-- 模型选项卡   评价模型 / FAQ模型 -->
    <div class="modelTab">
      <span>评价模型</span>
      <span>FAQ模型</span>
    </div>

    <!-- 搜索、排序、筛选 -->
    <div class="toolbar">
      <div class="new-model">
        <el-button type="primary" icon="el-icon-circle-plus">新建评价模型</el-button>
        <i class="iconfont icon-question"></i>
      </div>
      <div class="search">
        <el-input
          placeholder="搜索模型名称"
          v-model="searchValue"
          size="small">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </div>
      <div class="filter">
        <el-select v-model="selectValue" placeholder="排列方式" size="small">
          <!-- v-model的值为当前被选中的el-option的 value 属性值 -->
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="icon-menus">
          <el-popover
            v-model="popupsVisable"
            placement="bottom-start"
            width="200"
            trigger="click">
            <div class="content">
              <div class="title">筛选条件</div>
              <p>应用场景</p>
              <el-tag 
                v-for="(item, i) in tagFairType.list" 
                :key="item.i" 
                size="mini"
                :class="{active: tagFairType.tagIndex === i}"
                @click="tagFairType.tagIndex = i">
                {{item}}
              </el-tag>
              <p>运行状态</p>
              <el-tag 
                v-for="(item, i) in tagIsOpen.list" 
                :key="item.i" 
                size="mini"
                :class="{active: tagIsOpen.tagIndex === i}"
                @click="tagIsOpen.tagIndex = i">
                {{item}}
              </el-tag>
              <div class="btn">
                <el-button size="mini" @click="filterCondition">确认</el-button>
              </div>
            </div>
            <i class="iconfont icon-fillter" slot="reference"></i>
          </el-popover>
          <i class="iconfont icon-menu"></i>
          <i class="iconfont icon-menu1"></i>
          <i class="iconfont icon-setting"></i>
        </div>
      </div>
    </div>

    <!-- 我的模型 -->
    <div class="model">
      <div class="title">我的模型</div>
      <div class="model-list">
        <div class="model-box">
          <div class="title">算法工程师</div>
          <div class="type">校招/社招/外包</div>
          <span class="time">
            <i class="icon el-icon-time"></i>
            2019-03-24
          </span>
          <div class="counts">
            <div class="column">
              <span class="num">4</span>
              <i class="iconfont icon-generally"></i>
            </div>
            <div class="column column-border">
              <span class="num">4</span>
              <i class="iconfont icon-major"></i>
            </div>
            <div class="column">
              <span class="num">4</span>
              <i class="iconfont icon-issues"></i>
            </div>
          </div>
          <div class="start">已启用</div>
        </div>
      </div>
    </div>

    <!-- 购物车 -->

    <!-- 弹出窗 -->
    <!-- <el-popover
      v-model="popupsVisable"
      placement="bottom-start"
      width="200"
      trigger="click">
      <div class="content">
        <div class="title">筛选条件</div>
        <p>应用场景</p>
        <el-tag 
          v-for="(item, i) in tagFairType.list" 
          :key="item.i" 
          size="mini"
          :class="{active: tagFairType.tagIndex === i}"
          @click="tagFairType.tagIndex = i">
          {{item}}
        </el-tag>
        <p>运行状态</p>
        <el-tag 
          v-for="(item, i) in tagIsOpen.list" 
          :key="item.i" 
          size="mini"
          :class="{active: tagIsOpen.tagIndex === i}"
          @click="tagIsOpen.tagIndex = i">
          {{item}}
        </el-tag>
        <div class="btn">
          <el-button size="mini" @click="filterCondition">确认</el-button>
        </div>
      </div>
      <i class="iconfont icon-fillter" slot="reference"></i>
    </el-popover> -->

    <!-- 分页 -->
    <div class="pager">
      <el-pagination
        v-if="pageCount > 0"
        background
        layout="prev, pager, next"
        :total="pageCount"
        :current-page="currentPage"
        :page-size="pageSize"
        @current-change="getModelInfo">
      </el-pagination>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4],
      searchValue: '',
      selectValue: '',
      options: [
        {value: '选项1的值', label: '创建时间'},
        {value: '选项2的值', label: '修改时间'},
        {value: '选项3的值', label: '关联岗位'},
        {value: '选项4的值', label: '调用次数'},
      ],
      pageSize: 10, // 一个页面展示几个
      pageCount: 20, // 总条目录
      currentPage: 1,
      keyWord: '',
      
      popupsVisable: false, // 弹出窗可见性
      // 标签
      tagFairType: {
        tagIndex: '',
        list: ['社招', '校招', '社招/校招', '外包']
      },
      tagIsOpen: {
        tagIndex: '',
        list: ['启用', '未启用']
      }

    }
  },
  computed: {},
  methods: {
    getModelInfo(currentPage) {
      if(currentPage) {
        this.currentPage = currentPage
      }
      const query = {
        searchContent: this.keyWord,
        filter: [],
        pageNum: this.currentPage,
        pageCount: this.pageSize
      }
      // 此处写请求数据的函数
    },
    // 筛选条件
    filterCondition() {
      this.popupsVisable = false
    },
  },
  created() {},
  updated() {
    // console.log(this.searchValue)
    // console.log(this.selectValue)
  },
}
</script>

<style lang="stylus" scoped>
$mainColor = #4872FF
$mainGray = #CBCDD6
$deepGray = #898989
$thinGray = #898989
$thinDark = #43425D
$mainBgColor = #F6F7FB

// 模型选项卡  评价模型 / FAQ模型
.modelTab
  text-align: left
  // box-shadow 0 0 2px #000
  span
    display: inline-block
    padding: 5px 10px
    font-weight: bold
    cursor: pointer
    &:first-of-type
      font-size: 28px
      color: $thinDark
      border-bottom: 4px solid $mainColor
    &:last-of-type
      margin-left: 32px
      font-size: 23px
      color: $mainGray 

// 搜索以及筛选工具
.toolbar
  width: 1200px
  margin: auto 
  box-shadow: 0 0 2px #000
  padding: 24px 20px
  display: flex
  justify-content: space-between
  align-items: center
  background: #fff
  .new-model
    // width: 200px
    // box-shadow: 0 0 2px #000
    .el-button
      margin-right: 25px
      background: $mainColor
      font-size: 13px
      border-radius: 25px
    .icon-question
      font-size: 23px
      color: $mainColor
      vertical-align: middle
  .search
    width: 540px
    // box-shadow: 0 0 2px #000
    .el-icon-search
      font-size: 16px
  .filter
    display: flex
    .el-select
      width: 135px
    .icon-menus
      width: 200px
      color: $mainGray
      display: flex
      justify-content: space-around
      align-items: center
      .icon-fillter, .icon-menu1
        font-size: 20px
        font-weight: bolder
      .icon-menu
        color: $mainColor
      .icon-setting
        font-size: 22px

// 分页
.pager >>>
  width: 100%
  padding: 10px 0
  position: fixed
  bottom: 53px
  box-shadow 0 0 2px #000
  .el-pager
    background: #fff
    li
      background: #fff
      border: 1px solid #D9D9D9
      border-radius: 4px
  .btn-prev
  .btn-next
    background: #fff
    border: 1px solid #D9D9D9
    border-radius: 4px

// 筛选按钮
.el-popper
  .content
    .title
      font-size: 14px
      color: $thinDark
    p
      font-size: 12px
      color: $deepGray
    .el-tag
      margin: 4px
      padding: 0 10px
      color: $mainGray
      cursor: pointer
      background: #fff
      transition: all .5s
      &.active
        background: rgba(103,194,58,.1)
        border-color: rgba(103,194,58,.2)
        color: #67c23a
    .btn
      text-align: center
      .el-button
        margin-top: 30px
        width: 118px
        border: 1px solid $mainColor
        border-radius: 25px
        color: $mainColor

// 模型盒子列表
.model
  margin-top: 24px
  background: $mainBgColor
  .title
    font-size: 14px
    color: $thinDark
    text-align: left
  .model-list
    margin-top: 20px
    .model-box
      width: 232px
      height: 208px
      background: #fff
      padding: 25px 20px
      position: relative
      border:1px solid $mainGray
      border-radius: 8px
      text-align: left 
      box-sizing: border-box
      .title
        font-size: 14px
        color: $thinDark
        font-weight: bold
      .type
        margin: 5px 0
        font-size: 11px
        color: $mainColor
      .time
        font-size: 10px
        color: $mainGray
      .counts
        position: absolute
        bottom: 24px
        left: 0
        right: 0
        display: flex
        .column
          flex: 1
          text-align: center
          .num, .iconfont
            display: block
            font-size: 16px
          .num
            color: $mainColor
          .iconfont
            color: $mainGray
        .column-border
          border-left: 1px solid $mainGray
          border-right: 1px solid $mainGray
      .start
        width: 48px
        padding: 4px
        font-size: 11px
        color: #fff
        background: $mainColor
        text-align: center
        border-radius: 0 8px 0 8px
        position: absolute 
        top: 0
        right: 0
      

// other

</style>

