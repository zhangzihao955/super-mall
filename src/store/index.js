import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList:[]
  },
  mutations: {
    addshopcart(state,payload){
      // state.cartList.push(payload)
      //查找之前数组中是否有新加入的商品
      let oldproduct = state.cartList.find(item=>{
        return item.iid ==payload.iid
      });
      if(oldproduct){
        oldproduct.count +=1
      }else{
        payload.count = 1;
        state.cartList.push(payload);

      }
    }
  },
  getters:{
  //   checkedboxx(state){
  //     if(state.cartList.filter(item=> item.checkbox).length ==state.cartList.length){
  //         return true 
  //     }else{
  //         return false
  //     }
  // }
  },
  actions: {
  },
  
  modules: {
  }
})
