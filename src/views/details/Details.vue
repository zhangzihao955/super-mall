<template>
    <div class="details">
        <deta-nav-bar @titleclick='titleclick'></deta-nav-bar>
        <deta-swarper :topImages="topImages"></deta-swarper>
        <deta-info :goods='goods'></deta-info>
        <deta-shop-info :shop='shop'></deta-shop-info>
        <deta-goods-info :detailInfo='detailInfo'></deta-goods-info>
        <deta-param-info id="paraminfo" :paramInfo="paramInfo"></deta-param-info>
        <deta-comment-info id="commentinfo" :commentInfo="commentInfo"></deta-comment-info>
        <deta-goods-list id="goodslist" :goods="recommend"></deta-goods-list>
        <deta-bottom-bar @addshopcart='addshopcart'></deta-bottom-bar>
    </div>
</template>
<script>
    //引入详情nabbar组件
    import DetaNavBar from './childComps/DetailsNavBar.vue'
    //引入商品轮播组件
    import DetaSwarper from './childComps/DeatilsSwarper.vue'
    //引入商品信息组件
    import DetaInfo from './childComps/DetailsInfo.vue'
    //引入商品店铺信息组件
    import DetaShopInfo from './childComps/DetailsShopInfo.vue'
    //引入商品图片展示
    import DetaGoodsInfo from './childComps/DetailsGoodsInfo.vue'
    //引入参数组件
    import DetaParamInfo from './childComps/DetailsParamInfo.vue'
    //引入评论组件
    import DetaCommentInfo from './childComps/DetailsCommentInfo.vue'
    //引入推荐组件
    import DetaGoodsList from './childComps/DetailsGoodsList.vue'
    //引入底部导航栏
    import DetaBottomBar from './childComps/DetailsBottomBar.vue'

    import {getDetalis,getRecommend,Goods,Shop,GoodsParam} from '../../network/details'
export default {
    data() {
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommend:[]
            
        }

    },
    // activated() {
    //      this.iid = this.$route.params.id;
    //     getDetalis(this.iid).then(res=>{
    //         console.log(res)
    //     })
    // },
    created() {
        this.iid = this.$route.params.id;
        getDetalis(this.iid).then(res=>{
            console.log(res),
            //获取轮播图图片
            this.topImages =  res.result.itemInfo.topImages,
            //创建获取商品信息
            this.goods = new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
            //创建店铺信息的对象
            this.shop = new Shop(res.result.shopInfo)
            //图片展示
            this.detailInfo = res.result.detailInfo
            //商品参数数据
            this.paramInfo = new GoodsParam(res.result.itemParams.info,res.result.itemParams.rule)
            //获取评论信息
            if(res.result.cRate !=null){this.commentInfo = res.result.rate.list[0]}
            
        });
        //请求推荐数据
        getRecommend().then(res=>{
            console.log(res),
            this.recommend = res.data.list
        })
    },
    components:{
        DetaNavBar,
        DetaSwarper,
        DetaInfo,
        DetaShopInfo,
        DetaGoodsInfo,
        DetaParamInfo,
        DetaCommentInfo,
        DetaGoodsList,
        DetaBottomBar

    },
    methods: {
        titleclick(index){
            console.log(index)
            if(index==1){ document.getElementById("paraminfo").scrollIntoView()};
            if(index==2){ document.getElementById("commentinfo").scrollIntoView()};
            if(index==3){ document.getElementById("goodslist").scrollIntoView()};
            
        },
        addshopcart(){
            //获取购物车需要展示的信息
            const product = {};
            product.image = this.topImages[0],
            product.title = this.goods.title,
            product.desc = this.goods.desc,
            product.price = this.goods.realPrice,
            product.iid = this.iid,
            product.checkbox=true,
            this.$store.commit('addshopcart',product)
            //将商品添加到购物车里面
        }
    },

}
</script>
<style scoped>
    .details{
        padding-bottom: 50px;
    }
</style>