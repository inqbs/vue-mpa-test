<template>
  <b-col sm="12">
    <b-table
      id="board-table"
      striped
      :items="items"
      :fields="board.fields"
      :per-page="pagination.perPage"
      :current-page="isServerSidePaging ? 1 : pagination.currentPage"
      :primary-key="board.idx"
      :tbody-transition-props="{ name: 'fade' }"
      small
    >
      <template #cell(title)="row">
        <span @click.stop="row.toggleDetails">
          {{row.item.title}}
        </span>
      </template>
      <template #row-details="row">
        <transition name="slide-fade">
          <b-card>
            <b-card-title>{{row.item.title}}</b-card-title>
            <b-card-sub-title class="mb-2 text-right">by {{row.item.author}}, {{row.item.relativeRegdate}}</b-card-sub-title>
            <hr />
            <p>
              {{ row.item.description }}
            </p>
          </b-card>
        </transition>
      </template>
    </b-table>
  </b-col>
</template>

<script>
export default {
  name: "Board",
  props: ["isServerSidePaging", "items", "pagination", "rows"],
  computed: {},
  data() {
    return {
      board: {
        fields: [
          { key: "idx", label: "No" },
          { key: "title", label: "제목" },
          { key: "author", label: "작성자" },
          { key: "relativeRegdate", label: "작성일자" },
        ],
      },
    };
  },
  mounted() {
    console.log("[components/Board] is mounted");
  },
};
</script>

<style lang="css">
</style>
