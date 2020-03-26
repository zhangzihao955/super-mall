<template>
     <div class="tab-bar-item" :class="{isactive:active}" @click='itemclick'>
         <slot name="item-icon"></slot>
         <slot name='item-text'></slot>
           <!-- <div class="iconfont icon-shouye"></div>
           <div class="ziti">首页</div> -->
     </div>
       <!-- <div class="tab-bar-item">
           <div class="iconfont icon-fenlei"></div>
           <div class="ziti">分类</div>
       </div>
       <div class="tab-bar-item">
           <div class="iconfont icon-gouwuche2"></div>
           <div class="ziti">购物车</div>
       </div>
       <div class="tab-bar-item">
           <div class="iconfont icon-wode"></div>
           <div class="ziti">我的</div>
       </div> -->
</template>
<script>
export default {
    props:{
        path:String
    },
    data(){
        return{
           // active:true
        }
    },
    methods: {
        itemclick(){//动态跳转路由
              if(this.$route.path != this.path){
                  this.$router.push(this.path)
                   //this.$router.replace(this.path)
             }
         }
    },
    computed: {//点击变色
        active(){
            //return this.$route.path ==this.path
            return this.$route.path.indexOf(this.path)!=-1
        }
    },
}
</script>
<style scoped>
 .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 49px;
    }
    .tab-bar-item .iconfont{
        font-size:20px;
        margin-top: 6px;
    }
    .tab-bat-item .ziti{
    font-size: 22px;
    }
    .isactive{
        color: red;
    }
</style>