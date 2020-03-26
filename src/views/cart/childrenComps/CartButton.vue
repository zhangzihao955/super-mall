<template>
<div>
   
    <van-submit-bar
    class="submit_bar"
   
  :price="cartPrice"
  button-text="提交订单">
    <van-checkbox v-model="checkedbox" @click="clickk">全选</van-checkbox>
    </van-submit-bar>
</div>
</template>
<script>
    import { SubmitBar } from 'vant';
    import { Checkbox } from 'vant';
export default {
      data() {
    return {
      checked: true
    };
  },
    components:{
        [SubmitBar.name]:SubmitBar,
        [Checkbox.name]:Checkbox
    },
    computed: {
         checkedbox:{
            //  get:function(){ return !this.$store.state.cartList.find(item=> !item.checkedox)},
            //  set:function(){}
            
            get:function(){ if(this.$store.state.cartList.length === 0){
                  return false 
              }else if(this.$store.state.cartList.filter(item=> item.checkbox).length ==this.$store.state.cartList.length){
                  return true
                  }else{
                  return false
              }
            },
            set:function(){}
         },
         cartPrice(){
             return this.$store.state.cartList.filter(item=> item.checkbox).reduce((prevalue,ite)=>{
                 return prevalue+ite.price*ite.count*100
             },0)
            //  get:function(){
            //       return this.$store.state.cartList.filter( item => {
            //          return item.checkbox
            //           }).reduce((prevalue,ite)=>{
            //      return prevalue+=ite.count*ite.price
            //  },0)
            //  },
            

            //   set:function(){}
         }
    },
    methods: {
        clickk(){
            if(this.$store.state.cartList.filter(item=> item.checkbox).length ===this.$store.state.cartList.length){
                  this.$store.state.cartList.forEach(element => {
                      element.checkbox=false
                  })         
        }else{
             this.$store.state.cartList.forEach(element => {
                      element.checkbox=true
                  })         
        }
        
        }
        // buttonclick(){
        //     if(this.$store.state.cartList.filter(item=> item.checkbox).length ===this.$store.state.cartList.length){
        //             return this.$store.state.cartList.forEach(item=>item.checkbox = flase)
        //     }else{
        //          this.$store.state.cartList.forEach(item=>item.checkbox=true)
        //     }
        // }
    },
}
</script>
<style scoped>
    .submit_bar{
        margin-bottom: 49px;
    }
</style>