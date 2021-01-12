<template>
  <b-card>
    <b-media no-body>
      <b-media-aside vertical-align="middle">
        <b-img-lazy :src="item.thumb" fluid :alt="item.thumbText" />
      </b-media-aside>
      <b-media-body>
        <h5>{{item.title}}</h5>
        <p>
          <del v-if="!!item.sale" class="h6 text-secondary mr-2">{{toCurrency(item.orgPrice)}}</del>
          <strong class="h4 text-danger">{{toCurrency(item.price)}}</strong>
        </p>
        <b-button @click.stop="remove">삭제</b-button>
      </b-media-body>
    </b-media>
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