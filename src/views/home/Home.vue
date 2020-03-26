<template>
    <div id="home">
        <!-- 头部导航组件 -->
        <nav-bar></nav-bar>
        <!-- 轮播组件 -->
        <swerper :banners='banners'></swerper>
        <!-- 今日推荐 -->
        <recomment-view :recommend='recommend'></recomment-view>
        <!-- 本周流行 -->
        <popular></popular>
        <!-- 索引栏目 -->
        <tab-product @itemclick='itemclick'></tab-product>
        <!-- 商品分类 -->
        <van-list
           v-model="loading"
           :finished="finished"
           finished-text="没有更多了"
           @load="onLoad">
           <goods-list :goods='showgoods'></goods-list>
           <!-- <goods-list :goods='goods[currenttype].list'></goods-list> -->
        </van-list>
        <ul>
           <li>1</li>
           <li>2</li>
           <li>3</li>
           <li>4</li>
           <li>5</li>
           <li>6</li>
        </ul>
   
    </div>
</template>
<script>
    // 引入头部导航组件
    import NavBar from '../../components/common/navbar/NavBar.vue'
    // 引入轮播图插件
    import swerper from '../../components/common/swerper/swerper.vue'

     //引入索引组件
    import TabProduct from '../../components/content/tabproduct/TabProduct.vue'
    //引入商品分类组件
    import GoodsList from '../../components/content/goods/GoodsList.vue'

    // 引入今日推荐模块
    import RecommentView from '../home/childrenhome/recommendview.vue'
    // 引入本周流行
    import Popular from './childrenhome/Popular.vue'
   
      // 引入网络请求
    import {getHomeMuItidata,getHomegoods} from '../../network/home'

    //本页引入的vant组件
    import { List } from 'vant';
  
export default {
    components:{
        NavBar,
        swerper,
        RecommentView,
        Popular,
        TabProduct,
        GoodsList,
        [List.name]:List
        // [Grid.name]:Grid,
        // [GridItem.name]:GridItem,
    },
    data() {
        return {
            banners:[],
            recommend:[],
            goods:{
                pop:{page:0,list:[]},
                new:{page:0,list:[]},
                sell:{page:0,list:[]}
            },
            currenttype:'pop',
            loading: false,   //下拉属性
            finished: false
        }
    },
    // activated() {
    //       //请求接口轮播图多个数据
    //     this.getHomeMuItidata(),
    //     //请求商品数据,流行，最新，精选
    //     this.getHomegoods('pop'),
    //     this.getHomegoods('new'),
    //     this.getHomegoods('sell')
    // },
    created() {
        //请求接口轮播图多个数据
        this.getHomeMuItidata(),
        //请求商品数据,流行，最新，精选
        this.getHomegoods('pop'),
        this.getHomegoods('new'),
        this.getHomegoods('sell')
        
    },
    methods: {
         //事件监听的相关方法
        itemclick(index){
            switch(index){
                case 0:
                    this.currenttype='pop'
                    break
                case 1:
                    this.currenttype='new'
                    break
                case 2:
                    this.currenttype='sell'
                    break
            }
        },

        //以下为网络请求
        getHomeMuItidata(){
            getHomeMuItidata().then(res=>{
                //console.log(res.data);
                this.banners = res.data.banner.list;
                this.recommend = res.data.recommend.list
            })
        },
        getHomegoods(type){
            const page = this.goods[type].page +1;
            getHomegoods(type,page).then(res=>{
                console.log(res);
                this.goods[type].list.push(...res.data.list);
                this.goods[type].page += 1;
                this.loading = false;
                if (res.data.list.length===0) {
                    this.finished = true;
                } else if(res.data.list.length<30){
                    this.finished = true
                }
                    
                       
            })
        },
        //上拉加载
        onLoad(){
            this.getHomegoods(this.currenttype)
        }
    },
     computed:{
         showgoods(){
             return this.goods[this.currenttype].list
         }
    }
}
</script>
<style scoped>
    /* #home{
        height: 100vh;
        position: relative;
    }
    .content{
        position: absolute;
        top: 89px;
        bottom: 50px;
        left: 0;
        right: 0;
        white-space: nowrap;
       overflow: hidden;
       text-overflow: hidden; 
    } */
       /* .shenglue{
       margin-top: 5px;
       font-size: 16px;
       line-height: 28px;
       overflow: hidden;
       text-overflow: ellipsis;
       display: -webkit-box;
       -webkit-line-clamp: 1;
       -webkit-box-orient: vertical;
  
   }
   .price{
       color: red;
   }
   .iconfont{
       margin-left: 7px;
   }*/
</style> 