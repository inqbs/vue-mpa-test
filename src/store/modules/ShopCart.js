import ItemVo from '@/model/ItemVo.js'

const state = {
    cartList: []
}

const getters = {
    cartList: state => state.cartList
}

const actions = {
    addCart({commit}, params){
        commit('addCart', params)
    },
    editCart({commit}, params){
        commit('editCart', params)
    },
    removeCart({commit}, idx){
        commit('removeCart', idx)
    },
}

const mutations = {
    addCart(state, item){
        console.log('ShopCart.addCart fired')
        if(!state.cartList.map(it=>it.idx).includes(item.idx)){
            state.cartList.push(item)
        }else{
            alert('이미 등록된 상품입니다.')
        }
    },
    editCart(state, params){
        console.log('ShopCart.editCart fired')
    },
    removeCart(state, idx){
        console.log('ShopCart.removeCart fired')
        state.cartList = state.cartList.filter(it=>it.idx !== idx);
    }

}

export default {
    state, getters, actions, mutations
}