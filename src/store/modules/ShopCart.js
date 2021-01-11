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
    addCart(state, params){
        console.log('ShopCart.addCart fired')
        state.cartList.push(params)
    },
    editCart(state, params){
        console.log('ShopCart.editCart fired')
    },
    removeCart(state, idx){
        console.log('ShopCart.removeCart fired')
        state.cartList.splice(idx, 1)
    }

}

export default {
    state, getters, actions, mutations
}