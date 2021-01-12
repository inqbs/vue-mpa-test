<template>
  <div class="card">
    <img class="card-img-top" :src="item.thumb" :alt="item.thumbText" />
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="item.link">{{item.title}}</router-link>
      </h5>
      <p class="card-text">{{item.description}}</p>
    </div>
    <div class="card-body text-right">
      <div class="d-flex flex-wrap mb-3" v-if="!!item.tag && item.tag.length > 0">
        <span v-for="tag in item.tag" :key="tag"
          class="badge badge-dark mr-2">
          {{tag}}
        </span>
      </div>
      <p>
        <del v-if="!!item.sale" class="h6 text-secondary mr-2">{{toCurrency(item.orgPrice)}}</del>
        <strong class="h4 text-danger">{{toCurrency(item.price)}}</strong>
      </p>
      <div class="btn-group d-flex">
        <button class="btn btn-outline-dark" type="button" @click.stop="addCart(item)">장바구니</button>
        <button class="btn btn-outline-dark" type="button">주문하기</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
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
  methods: {
    addCart(item){
      this.$store.dispatch('addCart', item)
    },
  }
}
</script>