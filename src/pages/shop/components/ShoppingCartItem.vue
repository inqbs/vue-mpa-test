<template>
  <b-card no-body class="overflow-hidden">
    <b-row align-v="center">
      <b-col sm="6">
        <b-card-img-lazy :src="item.thumb" :alt="item.thumbText" class="cart-item-img"></b-card-img-lazy>
      </b-col>
      <b-col sm="6">
        <h5>{{item.title}}</h5>
        <p>
          <del v-if="!!item.sale" class="h6 text-secondary mr-2">{{toCurrency(item.orgPrice)}}</del>
          <strong class="h4 text-danger">{{toCurrency(item.price)}}</strong>
        </p>
        <b-button @click.stop="remove">삭제</b-button>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: 'ShoppingCartItem',
  props: ['item'],
  computed: {
    toCurrency(){
      return value => Number(value || 0).toLocaleString('ko-KR', {style: 'currency',currency: 'KRW'});
    }
  },
  data(){
    return {

    }
  },
  methods:{
    remove(){
      this.$store.dispatch('removeCart', this.item.idx)
    }
  }
};
</script>

<style lang="css">
.cart-item-img{
  width: 100%;
  height: 12vw;
  object-fit: cover;
}
</style>
