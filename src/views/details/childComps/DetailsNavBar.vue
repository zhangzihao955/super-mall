<template>

  <van-sticky>

    <van-row class="van_row">
       <van-col class="van_col" span="3"><div class="iconfont icon-arrow-lift" @click="backclick"></div></van-col>
       <van-col class="van_coll" span="18">
           <div v-for="(item,index) in titles" 
           :key="index"
           :class="{active:currentIndex===index}"
           @click="titleclick(index)">
               {{item}}
           </div>
        </van-col>
       <van-col span="3"></van-col>
    </van-row>
   
</van-sticky>

</template>
<script>
    import { Col, Row } from 'vant';
        import { Sticky } from 'vant';
export default {
    data() {
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    components:{
        [Col.name]:Col,
        [Row.name]:Row,
         [Sticky.name]:Sticky
    },
    methods: {
        titleclick(index){
            this.currentIndex =index;
            this.$emit('titleclick',index)
        },
        backclick(){
            this.$router.back()
        }
    },
}
</script>
<style scoped>
    .van_row{
        line-height: 48px;
        background-color: floralwhite;
    }
    .van_col .iconfont{
        text-align:center;
        font-size: 22px;
    }
    .van_coll{
        /* background-color: pink; */
        display:flex;
    }
    .van_coll div{
        flex: 1;
        font-size: 14px;
        text-align: center;
    }
    .active{
        color: deeppink;
    }
</style>