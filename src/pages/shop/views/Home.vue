<template>
  <div>
    <h2>Home.vue</h2>
    <div class="card-columns">
      <ItemCard 
          v-for="(it, idx) in itemList" v-bind:key="idx" :item="it"
        ></ItemCard>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'
import ItemVo from '@/model/ItemVo'

export default {
  name: 'Home',
  components: {
    ItemCard,
  },
  data(){
    return {
      itemList:
        Array.from(Array(50).keys()).map(it=>new ItemVo({
          idx: it,
          link: `/detail/${it}`,
          type: Math.floor(Math.random() * 5),
          thumb: `/images/sample_${Math.floor(Math.random() * 24)+1}.jpg`,
          title: `test${it}`,
          description: `${it} 번째 아이템`,
          price: Math.floor(Math.random() * 50) * 100 + 1000,
          tag: Array.from(Array(Math.floor(Math.random()*4)).keys()).map(it=>`testTag${it}`)
        }))
    }
  },
  methods:{
    addCart(item){
      this.$store.dispatch('addCart', item)
    },
    editCart(item){
      this.$store.dispatch('editCart', item)
    },
    removeCart(item){
      this.$store.dispatch('removeCart', item)
    }
  }
};
</script>

<style lang="scss">

</style>