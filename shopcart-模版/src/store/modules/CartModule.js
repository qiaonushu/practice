import axios from 'axios'

const user = {
  state() {
    return {
      goodslist: []
    }
  },
  mutations: {
    receiveList(state, val) {
      state.goodslist = val
    },
    addCount(state, val) {
      state.goodslist.some(item => {
        if (item.id === val) {
          item.goods_count += 1
          return true
        }
      })
    },
    subCount(state, val) {
      state.goodslist.some(item => {
        if (item.id === val) {
          item.goods_count -= 1
          if (item.goods_count <= 1) item.goods_count = 1
          return true
        }
      })
    }
  },
  actions: {
    async getList(store) {
      const { data } = await axios.get('https://www.escook.cn/api/cart')
      store.commit('receiveList', data.list)
    }
  },
  getters: {
    allCount(state) {
      return state.goodslist.filter(item => item.goods_state).reduce((sum, item) => (sum += item.goods_count), 0)
    },
    allPrice(state) {
      return state.goodslist
        .filter(item => item.goods_state)
        .reduce((sum, item) => (sum += item.goods_count * item.goods_price), 0)
    },
    getState(state) {
      return state.goodslist.every(item => item.goods_state)
    }
  }
}

export default user
