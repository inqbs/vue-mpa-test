<template>
  <div id="app">
     <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
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
      </b-overlay>
    </b-container>
  </div>
</template>

<script>
export default {
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
</style>
