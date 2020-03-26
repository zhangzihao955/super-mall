<template>
   <van-sticky :offset-top="44">
        <van-row class="van-row">
           <van-col span="8" v-for="(text,index) in list" :key="index" @click="tabclick(index)">
               <span :class='{active:currentindex===index}'>{{text}}</span>
           </van-col>
       </van-row>
   </van-sticky>
</template>
<script>
    import { Sticky } from 'vant';
    import { Col, Row } from 'vant';
export default {
    data() {
        return {
            list:['流行','新款','精选'],
            currentindex:0
        }
    },
    components:{
      [Col.name]:Col,
      [Row.name]:Row,
      [Sticky.name]:Sticky
    },
    methods: {
        tabclick(index){
            this.currentindex=index;
            this.$emit('itemclick',index)
        }
    },
}
</script>
<style scoped>
    .van-row{
        background-color: honeydew;
    }
    .van-col{
        text-align: center;
        line-height: 40px;
    }
    .active{
        border-bottom: 2px solid red;
        color: palevioletred;
        padding: 5px;
    }
</style>