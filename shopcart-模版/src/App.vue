<template>
  <div>
    <MyHeader title="购物车案例"></MyHeader>
    <div class="main">
      <MyGoods v-for="item in list" :key="item.id" :name="item.goods_name" :img="item.goods_img" :id="item.id" :price="item.goods_price" :state="item.goods_state" :count="item.goods_count" @checkChange="changeState"></MyGoods>
    </div>
    <MyFooter></MyFooter>

  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyGoods from './components/MyGoods'
import MyFooter from './components/MyFooter'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter
  },
  created() {
    this.getList()
  },
  methods: {
    ...mapActions(['getList']),
    changeState({ is_state, is_id }) {
      this.list.some(item => {
        if (item.id === is_id) {
          item.goods_state = is_state
        }
      })
    }
  },
  computed: {
    ...mapState({ list: state => state.cart.goodslist })
  }
}
</script>

<style scoped>
.main {
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>