const cart = {
  state: {
    modelData: {
      code: 0,
      msg: 'successful',
      data: {
        username: 'Tom',
        goodsList: []
      }
    }
  },
  mutations: {
    MODEL_DATA(state, payload) {
      // alert('进入mutation')
      state.modelData = {
        ...state.modelData,
        ...payload  // ==> payload: payload
      }
      // alert('进入mutation修改state里的数据成功 ~_~')
    }
  },
  actions: {
    modelData({state, commit}, payload) {
      // alert('进入actions')
      commit('MODEL_DATA', payload)
      // alert('提交mutations成功 ~_~')
    }
  },
  getters: {
    // modelData(state) {
    //   return state.modelData
    // }
    getModelData: state => state.modelData
  }
}

export default cart