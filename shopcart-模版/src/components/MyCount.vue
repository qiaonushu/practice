<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" @click=" subCount(is_id)">-</button>
    <input type="number" class="form-control inp" v-model="is_count">
    <button type="button" class="btn btn-light" @click="addCount(is_id)">+</button>
  </div>
</template>

<script>
// 目标: 商品数量 - 控制
// 1. 外部传入数据对象
// 2. v-model关联对象的goods_count属性和输入框 (双向绑定)
// 3. 商品按钮 +和-, 商品数量最少1件
// 4. 侦听数量改变, 小于1, 直接强制覆盖1
import { mapMutations, mapState } from 'vuex'
export default {
  props: ['is_count', 'is_id'],
  methods: {
    ...mapMutations(['addCount', 'subCount'])
  },
  computed: {
    ...mapState({ list: store => store.state.cart.goodslist })
  }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 60px;
    text-align: center;
    margin: 0 10px;
  }
  .btn,
  .inp {
    transform: scale(0.9);
  }
}
</style>