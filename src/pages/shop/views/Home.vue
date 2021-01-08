<template>
  <div>
    <h2>Home.vue</h2>
    <div class="card-columns">
      <ItemCard 
          v-for="it in itemList" v-bind:key="it" :item="it"
        ></ItemCard>
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard.vue'

export default {
  name: 'Home',
  components: {
    ItemCard,
  },
  data(){
    return {
      itemList:[
        {
          type: 1,
          thumb: '',
          thumbText: 'test',
          title: 'test',
          description: 'test입니다1.',
          link: '/item',
          linkText: '링크'
        },
        {
          type: 2,
          thumb: '',
          thumbText: 'test2',
          title: 'test',
          description: 'test입니다2.',
          tag: ['test'],
          link: '',
          linkText: '링크'
        },
        {
          type: 3,
          thumb: '',
          thumbText: 'test3',
          title: 'test',
          description: 'test입니다3.',
          link: '',
          linkText: '링크'
        },
      ]
    }
  }
};
</script>

<style lang="scss">

</style>

    ItemCard