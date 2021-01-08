<template>
  <div class="card">
    <img class="card-img-top" :src="item.thumb" :alt="item.thumbText" />
    <div class="card-body">
      <h5 class="card-title">{{item.title}}</h5>
      <p class="card-text">{{item.description}}</p>
    </div>
    <div class="card-body text-right">
      <p>
        <strong>{{price}}</strong>
      </p>
      <div class="d-flex mb-3" v-if="!!item.tag && item.tag.length > 0">
        <span v-for="tag in item.tag" :key="tag"
          class="badge badge-dark">
          {{tag}}
        </span>
      </div>
      <div class="btn-group d-flex">
        <router-link :to="item.link" class="btn btn-outline-dark">상세보기</router-link>
        <router-link :to="item.link" class="btn btn-outline-dark">장바구니</router-link>
        <router-link :to="item.link" class="btn btn-outline-dark">주문하기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['item'],
  computed: {
    price(){
      const price = this.item.price || 0
      console.log(Number(price).toLocaleString('ko-KR', {style: 'currency',currency: 'KRW'}))
      return Number(price).toLocaleString('ko-KR', {style: 'currency',currency: 'KRW'});
    }
  },
  data(){
    return {
    }
  }
}
</script>