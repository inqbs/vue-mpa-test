<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="navbar-brand">SHOP</div>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/" exact >
              홈
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/electronic" exact >
              전자제품
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/clothing" exact>
              의류
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/food" exact>
              식품
            </router-link>
          </li>
        </ul>
      </div>
      <form class="form-inline" @submit="search">
        <input class="form-control mr-sm-2" type="search" v-model="keyword"
          placeholder="검색" aria-label="검색">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">검색</button>
      </form>
    </nav>

    <main class="container">
      <transition name="fade" mode="out-in">
          <router-view />
      </transition>
    </main>

    <div v-b-toggle.cart-container class="btn__cart-wrapper">
      <b-button type="button" class="btn btn-warning btn-lg rounded-circle w-100 h-100">
        <font-awesome-icon icon="shopping-cart" />
      </b-button>
    </div>

    <b-sidebar id="cart-container" title="쇼핑카트" bg-variant="warning" text-variant="dark" right shadow>
      <div class="container">
        <transition-group name="fade" mode="out-in">
          <ShoppingCartItem 
              v-for="(item, idx) in cartList" :key="idx"
              :item="item" :idx="idx"
              class="mb-3" >
          </ShoppingCartItem>
        </transition-group>
      </div>
      <template #footer>
       <div class="d-flex bg-dark text-light align-items-center px-3 py-2">
        <strong class="mr-auto">주문금액: {{cartSumPrice}}</strong>
        <b-button variant="warning" size="sm">결제</b-button>
       </div>
      </template>
    </b-sidebar>

  </div>
</template>

<script>
import ShoppingCartItem from './components/ShoppingCartItem'

export default {
  components: {ShoppingCartItem},
  computed:{
    cartList(){
      return this.$store.getters.cartList;
    },
    cartSumPrice(){
      if(this.$store.getters.cartList.length > 0){
        return this.$store.getters.cartList.map(it=>it.price).reduce((a,b)=>a+b).toLocaleString('ko-KR', {style: 'currency',currency: 'KRW'});
      }else{
        return '₩0'
      }
    }
  },
  data() {
    return {
      keyword: '',
    }
  },
  methods:{
    search(e){
      e.returnValue=e.preventDefault(),''
      console.log(this.keyword)
      return
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.15s;
  transition-property: opacity;
  transition-timing-function: ease-in-out;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.btn__cart-wrapper{
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
