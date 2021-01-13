<template>
  <div>
    <b-row>
      <b-table 
        id="board-table"
        striped 
        :items="items"
        :fields="board.fields"
        :per-page="pagination.perPage"
        :current-page="pagination.currentPage"
        :primary-key="board.idx"
        :tbody-transition-props="{name:'fade'}"
        small
      ></b-table>
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
          :total-rows="rows"
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
export default {
  name: 'Board',
  props: ['items', 'rows'],
  computed: {
  },
  data(){
    return {
      pagination: {
        perPage: 10,
        currentPage: 1,
        options:[
          {value: 10, text: '10건'},
          {value: 30, text: '30건'},
          {value: 50, text: '50건'},
        ]
      },
      board:{
        fields: [
          { key: 'idx', label: 'No' , sortable: true},
          { key: 'title', label: '제목' },
          { key: 'author', label: '작성자' },
          { key: 'relativeRegdate', label: '작성일자' , sortable: true},
        ],
      }
    }
  },
  mounted(){
    console.log('[components/Board] is mounted')
  },
  methods:{
    movePage(num){
      console.log(`movePage fired to ${num}`)
    },
  }
};
</script>

<style lang="css">
</style>
