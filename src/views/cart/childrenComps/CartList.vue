<template>
<div class="list">   
    <div v-for=" item in $store.state.cartList" :key="item.iid" class="goods">
         <van-checkbox 
         v-model="item.checkbox" class="van_checkbox" 
         icon-size=14
         @click="item.checkbox=!item.checkbox">
         </van-checkbox>
         <van-card 
             currency=''
             :num="item.count"
             :price="item.price"
             :desc="item.desc"
             :title="item.title"
             :thumb="item.image">
        </van-card>
    </div>
    
</div>
</template>
<script>
    import { Card } from 'vant';
    import { Checkbox, CheckboxGroup } from 'vant';
export default {
      data() {
    return {
      checked: true
    };
  },
    components:{
        [Card.name]:Card,
        [Checkbox.name]:Checkbox,
        [CheckboxGroup.name]:CheckboxGroup
    },

}
</script>
<style scoped>
    .goods{
        padding:8px 0 8px 0;
        position: relative;
    }
    .van_checkbox{
        position: absolute;
        z-index: 2;
        top:60px;
    }
</style>