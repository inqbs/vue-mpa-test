<template>
  <div id="app">
    <b-nav tabs id="nav">
      <b-nav-item href="/shop">shop</b-nav-item>
      <b-nav-item href="/page">page</b-nav-item>
      <b-nav-item>test2</b-nav-item>
      <b-nav-item>test3</b-nav-item>
      <b-nav-item>test4</b-nav-item>
    </b-nav>
    <b-jumbotron fluid header="Main Page" lead="This is main page" bg-variant="dark" text-variant="light">
    </b-jumbotron>
    <b-container>
      <b-row>
        <b-col cols="12">
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.stop.prevent="handleSubmit(submit)">
              <validation-provider
                name="이메일"
                :rules="{required: true, email: true}"
                v-slot="validationContext"
              >
                <b-form-group
                  label="이메일"
                  label-for="bf-email"
                >
                  <b-form-input
                    id="bf-email"
                    type="email"
                    name="email"
                    :state="getValidationState(validationContext)"
                    aria-describedby="bf-email-live-feedback"
                    v-model="value"
                  ></b-form-input>
                  <b-form-invalid-feedback id="bf-email-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>
              <b-button type="submit" variant="primary">확인</b-button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      value: ''
    }
  },
  mounted(){
    console.log(process.env)
  },
  methods:{
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null;
    },
    submit(){
      alert('submit is complete')
    }
  }
};
</script>

<style lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
