<template>
 
    <van-grid :column-num="2">
        <van-grid-item v-for="(list,index)  in goods" :key="index" @click="itemclick(list.iid)">
            <img style="width:100%" :src="list.image" alt="">
            <h2 class="shenglue">{{list.title}}</h2>
            <div><span class='price'>{{list.price}}</span><span class="iconfont icon-ziyuan2">{{list.cfav}}</span></div>
        </van-grid-item>
   </van-grid>
  
</template>
<script>
    import { Grid, GridItem } from 'vant';

export default {
    props:{
        goods:{
            type:Array
        }
    },
    data() {
        return {
         
        }
    },
    components:{
        [Grid.name]:Grid,
        [GridItem.name]:GridItem,
    
    },
    methods: {
        itemclick(listid){
        //    this.$router.push('/detail/'+listid)
        }
    },

}
</script>

<style scoped>
   .shenglue{
       margin-top: 5px;
       font-size: 16px;
       line-height: 28px;
       overflow: hidden;
       text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 1;
       -webkit-box-orient: vertical;
       /* white-space: nowrap;
       overflow: hidden;
       text-overflow: hidden; */
   }
   .price{
       color: red;
   }
   .iconfont{
       margin-left: 7px;
   }
</style>