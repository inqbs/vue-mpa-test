<template>
  <b-card>
    <b-row>
      <b-col cols="9">
        <b-card-title>{{ item.title }}</b-card-title>
      </b-col>
      <b-col cols="3" class="text-right">
        <b-input-group>
          <b-form-input
            size="sm"
            placeholder="비밀번호"
            type="password"
            v-model="input.password"
          ></b-form-input>
          <b-input-group-append>
            <b-button v-b-modal.modal-alert variant="danger" size="sm">
              <b-icon-trash />
            </b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>

    <b-modal
      id="modal-alert"
      centered
      title="확인"
      button-size="sm"
      ok-variant="success"
      cancel-variant="danger"
      header-class="p-2 border-bottom-0"
      footer-class="p-2 border-top-0"
      @ok="onOk"
    >
      <p>정말로 삭제하시겠습니까?</p>
    </b-modal>

    <b-card-sub-title class="mb-2 text-right"
      >by {{ item.author }},
      {{ item.relativeRegdate }}</b-card-sub-title
    >
    <hr />
    <p>
      {{ item.description }}
    </p>
  </b-card>
</template>

<script>
export default {
  name: "BoardDetail",
  props: ["item"],
  data(){
    return {
      input:{
        password: '',
      }
    }
  },
  methods: {
    onOk(){
      this.$emit('runDelete',{
        idx: this.item.idx,
        password: this.input.password
      })
    }
  },
};
</script>