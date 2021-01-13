<template>
  <div>
    <b-row>
      <Board
        :items.sync="board.items"
        :pagination.sync="pagination"
        :isServerSidePaging="true"
        :rows.sync="board.rows"
      />
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
          @change="movePage"
        ></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";

import BoardVo from "@/model/BoardVo.js";
import Board from "../components/Board";

export default {
  name: "ServerPagination",
  components: {
    Board,
  },
  data() {
    return {
      pagination: {
        perPage: 10,
        currentPage: 1,
        options: [
          { value: 10, text: "10건" },
          { value: 30, text: "30건" },
          { value: 50, text: "50건" },
        ],
      },
      board: {
        target: "http://localhost:5000/test/board/list",
        items: [],
        rows: 0,
      },
    };
  },
  mounted() {
    console.log(`[View/ServerPagination] is mounted : ${this.src}`);

    this.getData();
  },
  methods: {
    getData(params, onSuccess) {
      const $this = this;

      axios
        .get($this.board.target, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset = utf-8",
          },
          params: params ?? {
            page: $this.pagination.currentPage,
            perPage: $this.pagination.perPage,
          }
        })
        .then((res) => {
          console.log(res);
          $this.board.items = res.data.list.map((it) => new BoardVo(it));
          $this.board.rows = res.data.size;

          $this.$emit("loadOver", {
            load: true,
            result: $this.board.items.length > 0,
          });

          console.log("[View/ClientPagination] this.emit.loadOver");

          if(!!onSuccess && typeof onSuccess === 'function'){
            onSuccess();
          }
        })
        .catch((err) => {
          console.error(err);
          $this.$emit("loadOver", {
            load: false,
            result: false,
          });
        });
    },
    movePage(page){
      console.log(`movePage fired => param: ${page}`)
      this.getData(
        {page: page, perPage: this.pagination.perPage},
        ()=>{ this.pagination.currentPage = page;}
      )
    }
  },
  watch:{
    'pagination.perPage': function(newValue, oldValue){
        console.log(`watch/pagination.perPage is changed`)
        this.movePage(1);
    }
  }
};
</script>

<style>
</style>
