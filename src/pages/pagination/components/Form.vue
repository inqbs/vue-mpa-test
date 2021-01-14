<template>
  <validation-observer ref="observer" v-slot="{ handleSubmit }">
    <b-modal
      id="modal-form"
      title="글 작성"
      :no-close-on-backdrop="true"
      :no-close-on-esc="true"
      @ok.prevent="handleSubmit(submit)"
    >
      <b-form>
        <validation-provider
          name="제목"
          :rules="{ required: true, max: size.title }"
          v-slot="validationContext"
        >
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
              :state="getValidationState(validationContext)"
              required
            ></b-form-input>
          </b-form-group>
        </validation-provider>

        <validation-provider
          name="내용"
          :rules="{ required: true, max: size.description }"
          v-slot="validationContext"
        >
          <b-form-group
            id="input-group-description"
            label-for="input-description"
            :description="`${form.description.length} / ${size.description}`"
          >
            <b-form-textarea
              id="input-description"
              v-model="form.description"
              placeholder="내용"
              rows="12"
              no-resize
              required
              :state="getValidationState(validationContext)"
              class="mb-2"
            ></b-form-textarea>
            <b-progress
              :value="form.description.length"
              :variant="descriptionVariant"
              :max="size.description"
              height="4px"
            ></b-progress>
          </b-form-group>
        </validation-provider>

        <b-row>
          <b-col sm="4">
            <validation-provider
              name="닉네임"
              :rules="{ required: true, min: 2, max: size.author }"
              v-slot="validationContext"
            >
              <b-form-group
                id="input-group-author"
                label-for="input-author"
                :description="`최대 ${size.author}자`"
              >
                <b-form-input
                  id="input-author"
                  v-model="form.author"
                  type="text"
                  placeholder="닉네임"
                  :state="getValidationState(validationContext)"
                  required
                ></b-form-input>
              </b-form-group>
            </validation-provider>
          </b-col>

          <b-col sm="8">
            <validation-provider
              name="비밀번호"
              :rules="{ required: true, min: 4, max: size.password }"
              v-slot="validationContext"
            >
              <b-form-group
                id="input-group-password"
                label-for="input-password"
                :description="`최대 ${size.password}자`"
              >
                <b-form-input
                  id="input-password"
                  v-model="form.password"
                  type="password"
                  placeholder="비밀번호"
                  :state="getValidationState(validationContext)"
                  required
                ></b-form-input>
              </b-form-group>
            </validation-provider>
          </b-col>
        </b-row>
      </b-form>
    </b-modal>
  </validation-observer>
</template>

<script>
import axios from "axios";

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
        title: 30,
        description: 480,
        author: 6,
        password: 12,
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
    submit() {
      const $this = this;

      axios
        .post("http://localhost:3000/create", $this.form, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json; charset = utf-8",
          },
        })
        .then((res) => {
          //  TODO: alert
          if (!!res.data.result) {
            //  TODO: refresh board
            $this.$emit("created");

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
              msg: "등록이 성공했습니다.",
              variant: "success",
            });
          } else {
            $this.$emit("alert", {
              title: "오류",
              msg: "등록이 실패했습니다.",
              variant: "danger",
            });
          }
        })
        .catch((err) => {
          console.error(err);
          //  TODO: alert
          $this.$emit("alert", {
            title: "오류",
            msg: "등록이 실패했습니다.",
            variant: "danger",
          });
        });
    },
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
  },
};
</script>