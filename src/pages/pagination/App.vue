<template>
  <div id="app">
     <b-jumbotron fluid header="Pagination Page" lead="This is Pagination page" bg-variant="warning" text-variant="dark">
    </b-jumbotron>
    <b-container>
      <b-table 
        id="board-table"
        striped 
        :items="board.items"
        :fields="board.fields"
        :per-page="pagination.perPage"
        :current-page="pagination.currentPage"
        small
      ></b-table>
      <b-pagination
        v-model="pagination.currentPage"
        :total-rows="rows"
        :per-page="pagination.perPage"
        aria-controls="board-table"
        align="center"
        pills
        @change="movePage"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
import BoardVo from '@/model/BoardVo.js'

export default {
  data(){
    return {
      pagination: {
        perPage: 10,
        currentPage: 1,
      },
      board:{
        fields: [
          { key: 'idx', label: 'No' , sortable: true},
          { key: 'title', label: '제목' },
          { key: 'author', label: '작성자' },
          { key: 'relativeRegdate', label: '작성일자' , sortable: true},
        ],
        items: []
      }
    }
  },
  computed:{
    rows(){
      return 1000
      //return this.board.items.length
    },
  },
  mounted(){
    this.board.items = this.generateBoardVo(20)
  },
  methods:{
    movePage(num){
      const boardSize = this.board.items.length
      if(boardSize < num * this.pagination.perPage && boardSize < this.rows){
        this.board.items.push(this.generateBoardVo(this.pagination.perPage, boardSize))
      }
      this.board.items = this.board.items.flat()
    },
    generateBoardVo(cnt, startIdx){
      return Array.from(Array(cnt).keys()).map(it=>new BoardVo({
        idx: it + (startIdx || 0),
        link: `/detail/${it}`,
        title: `test-${it}`,
        description: `${it} 번째 게시글입니다`,
        author: `test-author-${it}`,
        regdate: this.momentRandom('2020-01-01')
      }))
    },
    momentRandom(start, end = this.$moment.now()) {
      const moment = this.$moment;
      const endTime = +moment(end);
      const randomNumber = (to, from = 0) =>
        Math.floor(Math.random() * (to - from) + from);

      if (start) {
        const startTime = +moment(start);
        if (startTime > endTime) {
          throw new Error('End date is before start date!');
        }
        return moment(randomNumber(endTime, startTime));
      }
      return moment(randomNumber(endTime));
    }
  }
};
</script>

<style lang="scss">
</style>
