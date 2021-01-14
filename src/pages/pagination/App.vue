<template>
  <div id="app">
     <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div class="navbar-brand">BOARD</div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/" exact >
              client-side
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/server" exact >
              server-side
            </router-link>
          </li>
        </ul>
      </div>
    </nav>

    <b-jumbotron fluid header="Pagination Page" lead="This is Pagination page" bg-variant="warning" text-variant="dark">
    </b-jumbotron>

    <b-container>
      <b-overlay :show="isLoading">
        <router-view @loadStart="onLoadStart" @loadOver="onLoadOver" />
        <template #overlay>
          <div class="text-center">
            <b-icon icon="stopwatch" font-scale="3" animation="cylon"></b-icon>
            <p id="cancel-label">Please wait...</p>
          </div>
        </template>
      </b-overlay>
    </b-container>

    <div v-b-toggle.cart-container class="btn-fixed-wrapper">
      <b-button v-b-modal.modal-form type="button" class="btn btn-warning btn-lg rounded-circle w-100 h-100">
        <font-awesome-icon icon="pen" />
      </b-button>

      <Form />
    </div>

  </div>
</template>

<script>
import Form from './components/Form';

export default {
  components:{
    Form
  },
  data(){
    return {
      isLoading: true,
    }
  },
  mounted(){
    console.log('[app.vue] is mounted')
  },
  methods:{
    onLoadStart(){
      this.isLoading = true
    },
    onLoadOver(result){
      console.log(`onLoadOver is fired. ${result}`)
      this.isLoading = false
      console.log(result)
    },
  }
};
</script>

<style lang="scss">
.btn-fixed-wrapper{
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  width: 64px;
  height: 64px;
  transition: all .48s ease;
  z-index: 500;
  &.not-collapsed{
    right: calc(1rem + 320px);
  }
}
</style>
