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
          {{ row.item.title }}
        </span>
      </template>

      <template #cell(regdate)="row">
        <time :datetime="row.item.regdate">
          {{ getRelativeTime(row.item.regdate) }}
        </time>
      </template>

      <template #row-details="row">
        <transition name="slide-fade">
          <BoardDetail :item="row.item" @runDelete="onDelete" />
        </transition>
      </template>
    </b-table>

    <div
      v-if="!items || items.length == 0"
      class="alert text-center mt-4 mb-4 d-flex align-items-center justify-content-center alert-light"
    >
      <b-icon-view-list class="mr-2" />
      <span>글 없음</span>
    </div>
  </b-col>
</template>

<script>
import moment from "moment";
import axios from 'axios'

import BoardDetail from "../components/BoardDetail";

export default {
  name: "Board",
  components: {
    BoardDetail,
  },
  props: ["isServerSidePaging", "items", "pagination", "rows"],
  computed: {
    getRelativeTime() {
      return (time) => moment(time).fromNow();
    },
  },
  data() {
    return {
      board: {
        fields: [
          { key: "idx", label: "No" },
          { key: "title", label: "제목" },
          { key: "author", label: "작성자" },
          { key: "regdate", label: "작성일자" },
        ],
      },
    };
  },
  mounted() {
    console.log("[components/Board] is mounted");
  },
  methods: {
    onDelete(param) {
      const $this = this;

      console.log(
        `[Board/onDelete] is fired -> ${param.idx} : ${param.password}`
      );

      axios
        .post("http://localhost:3000/delete", param, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset = utf-8",
          },
        })
        .then((res) => {
          //  TODO: alert
          if (!!res.data.result) {
            //  TODO: refresh board
            $this.$emit("updateRequred");

            $this.form = {
              title: "",
              description: "",
              author: "",
              password: "",
            };

            //  close modal
            $this.$bvModal.hide("modal-form");

            $this.$emit("alert", {
              title: "알림",
              msg: "삭제가 완료되었습니다.",
              variant: "success",
            });
            
          } else {

            $this.$emit("alert", {
              title: "오류",
              msg: res.data.msg || "삭제가 실패했습니다.",
              variant: "danger",
            });
          }
        })
        .catch((err) => {
          console.error(err);
          //  TODO: alert
          $this.$emit("alert", {
            title: "오류",
            msg: "삭제가 실패했습니다.",
            variant: "danger",
          });
        });
    },
  },
};
</script>

<style lang="css">
</style>
