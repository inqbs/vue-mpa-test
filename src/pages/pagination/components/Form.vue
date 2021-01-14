<template>
  <b-modal
    id="modal-form"
    title="글 작성"
    :no-close-on-backdrop="true"
    :no-close-on-esc="true"
  >
    <b-form @submit="submit">
      <b-form-group
        id="input-group-title"
        label-for="input-title"
        description="최대 30자"
      >
        <b-form-input
          id="input-title"
          v-model="form.title"
          type="text"
          placeholder="제목"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-description"
        label-for="input-description"
        :description="`${form.description.length} / ${size.description}`"
        :state="form.description.length <= size.description"
      >
        <b-form-textarea
          id="input-description"
          v-model="form.description"
          placeholder="내용"
          rows="12"
          :max-length="size.description"
          no-resize
          required
          class="mb-2"
        ></b-form-textarea>
        <b-progress
          :value="form.description.length"
          :variant="descriptionVariant"
          :max="size.description"
          height="4px"
        ></b-progress>
      </b-form-group>

      <b-row>

        <b-col sm="4">
          <b-form-group
            id="input-group-author"
            label-for="input-author"
            description="최대 6자"
          >
            <b-form-input
              id="input-author"
              v-model="form.author"
              type="text"
              placeholder="닉네임"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col sm="8">
          <b-form-group
            id="input-group-password"
            label-for="input-password"
            description="최대 12자"
          >
            <b-form-input
              id="input-password"
              v-model="form.password"
              type="password"
              placeholder="비밀번호"
              required
            ></b-form-input>
          </b-form-group>
        </b-col>

      </b-row>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      form: {
        title: "",
        description: "",
        author: "",
        password: "",
      },
      size: {
        description: 480,
      },
    };
  },
  computed: {
    descriptionVariant() {
      const ratio =
        (this.form.description.length / this.size.description) * 100;
      switch (true) {
        case ratio > 100:
          return "danger";
        case ratio > 70:
          return "warning";
        default:
          return "info";
      }
    },
  },
  methods: {
    submit() {},
  },
};
</script>