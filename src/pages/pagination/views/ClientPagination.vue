<template>
  <div>
    <Board :items.sync="board.items"
           :rows.sync="board.rows" />
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
      board:{
        items: [],
        rows: 0
      }
    }
  },
  mounted(){
    console.log(`[View/ClientPagination] is mounted : ${this.src}`)

    const $this = this;

    axios.get('http://localhost:5000/test/data', { 
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
