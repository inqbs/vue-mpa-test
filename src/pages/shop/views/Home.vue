<template>
  <div>
    <h2>Home.vue</h2>
    <div class="card-columns">
      <transition-group name="fade">
        <ItemCard 
            v-for="it in resultList" v-bind:key="it.idx" :item="it"
          ></ItemCard>
      </transition-group>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/pages/shop/components/ItemCard.vue'
import ItemVo from '@/model/ItemVo'

export default {
  name: 'Home',
  components: {
    ItemCard,
  },
  computed:{
    resultList(){
      if(!!this.keyword){
        return this.itemList.filter(it=>it.title.includes(this.keyword))
      }else{
        return this.itemList
      }
    }
  },
  props:[
    'keyword'
  ],
  mounted(){
    this.itemList = Array.from(Array(50).keys()).map(it=>new ItemVo({
          idx: it,
          link: `/detail/${it}`,
          type: Math.floor(Math.random() * 5),
          thumb: `/images/sample_${Math.floor(Math.random() * 24)+1}.jpg`,
          title: `test${it}`,
          description: `${it} 번째 아이템`,
          price: Math.floor(Math.random() * 50) * 100 + 1000,
          tag: Array.from(Array(Math.floor(Math.random()*4)).keys()).map(it=>`testTag${it}`)
    }))
  },
  data(){
    return {
      itemList: []
    }
  },
  methods:{
    addCart(item){
      console.log(item)
      this.$store.dispatch('addCart', item)
    },
  }
};
</script>

<style lang="scss">

</style>