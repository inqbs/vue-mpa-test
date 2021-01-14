<template>
  <div>
    {{ /**
        [Client Pagination]
        @items: table에 보여질 아이템 목록
        @perPage: 한 페이지당 보여질 아이템 갯수
        @currentPage: 현재 페이지
        @total-rows: 전체 아이템 목록

        1. 모든 데이터를 mounted시에 load
        2. table에 @items, @perPage, @currentPage 정보를 setting
        3. pagination에 @total-rows, @perPage 정보를 setting, @currentPage는 v-model로 설정
    */ }}
    <b-row>
      <Board :items.sync="board.items"
            :pagination.sync="pagination"
            :rows.sync="board.rows" />
    </b-row>
    <b-row>
      <b-col md="2">
        <b-form-select v-model="pagination.perPage" :options="pagination.options">
          <template #first>
            <b-form-select-option :value="0" disabled>-- 행선택 --</b-form-select-option>
          </template>
        </b-form-select>
      </b-col>
      <b-col md="8">
        <b-pagination
          v-model="pagination.currentPage"
          :total-rows="board.rows"
          :per-page="pagination.perPage"
          aria-controls="board-table"
          align="center"
          pills
        ></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'

import BoardVo from '@/model/BoardVo.js'
import Board from "../components/Board";

export default {
  name: "ClientPagination",
  components: {
    Board,
  },
  data(){
    return {
      pagination: {
        perPage: 10,
        currentPage: this.$route.query.page ?? 1,
        options:[
          {value: 10, text: '10건'},
          {value: 30, text: '30건'},
          {value: 50, text: '50건'},
        ]
      },
      board:{
        items: [],
        rows: 0
      }
    }
  },
  mounted(){
    console.log(`[View/ClientPagination] is mounted`)
    console.log(`[View/ClientPagination] page: ${this.pagination.currentPage}`)

    const $this = this;
    $this.$emit('loadStart')

    axios.get('http://localhost:3000/list', { 
      headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type' : 'application/json; charset = utf-8'
      },
    }).then(res=>{
      console.log(res)
      $this.board.items = res.data.list.map(it=>new BoardVo(it));
      $this.board.rows = res.data.size;

      $this.$emit('loadOver',{
        load: true,
        result: $this.board.items.length > 0
      })
      console.log('[View/ClientPagination] this.emit.loadOver')
    }).catch(err=>{
      console.error(err)
      $this.$emit('loadOver',{
        load: false,
        result: false
      })
    })
  },
  methods: {
  },
};
</script>

<style>
</style>
