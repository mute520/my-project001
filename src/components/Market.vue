<template>
  <div class="wrap">
    <pre>
      {{getModelData}}
      <!-- {{modelData}} -->
      {{list}}
    </pre>
  </div>
</template>

<script>
import { getPublicModel, modelInfo } from '@/api'
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState({
      getModelData: state => state.cart.modelData,
      list: 'list'
    }),
    // ...mapState(['list']),
    // ...mapGetters(['getModelData'])
  },
  methods: {
    getData() {
      
    }
  },
  created() {
    const query = {
      username: 'Tom',
      age: 20
    }
    getPublicModel(query).then(res => {
      // console.log('post请求 ===> ', res)
    })
    modelInfo().then(res => {
      // console.log('get请求 ===> ', res)
      // mapActions('modelData', res)
      this.$store.dispatch('modelData', res)
    })
    console.log('getModelData: ', this.getModelData)
    console.log('getModelData: ', this.$store)
  },
  mounted() {
    setTimeout(()=> {
      // console.log('getModelData:\n ', JSON.stringify(this.$store.state.cart.modelData, null, 2))
    },3000)
  }
}
</script>

<style lang="stylus">
  .wrap
    text-align: left
</style>

<style>
  .wrap{
    color: #230cf3;
  }
</style>