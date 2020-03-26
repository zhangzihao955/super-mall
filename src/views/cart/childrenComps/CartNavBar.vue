<template>
  <van-sticky>
    <van-row class="van_row">
       <van-col class="van_col" span="3"></van-col>
       <van-col class="van_coll" span="18">
           <div>购物车(<span>{{cartLength}}</span>)</div>
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

        }
    },
    components:{
        [Col.name]:Col,
        [Row.name]:Row,
         [Sticky.name]:Sticky
    },
    methods: {

    },
    computed: {
        cartLength(){
            return this.$store.state.cartList.length
        }
    },
}
</script>
<style scoped>
    .van_row{
        line-height: 44px;
        /* background-color: floralwhite; */
        background-color: palevioletred;
        color: white;
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
        font-size: 18px;
        text-align: center;
    }

</style>