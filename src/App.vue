<template>
  <div id="app">
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
    <!-- <tab-bar>
      <tab-bar-item path="/home">
          <div slot="item-icon" class="iconfont icon-shouye"></div>
          <div slot="item-text" class="ziti">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
           <div slot="item-icon" class="iconfont icon-fenlei"></div>
           <div slot="item-text" class="ziti">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
           <div slot="item-icon" class="iconfont icon-gouwuche2"></div>
           <div slot="item-text" class="ziti">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
           <div slot="item-icon" class="iconfont icon-wode"></div>
           <div slot="item-text" class="ziti">我的</div>
      </tab-bar-item>
    </tab-bar> -->
    <main-tab-bar v-show="$route.meta.MainTabBar"></main-tab-bar>
  </div>
</template>

<script>
// import TabBar from './components/common/TabBar.vue'
// import TabBarItem from './components/common/TabBarItem.vue'
import MainTabBar from './components/common/MainTabBar.vue'
export default {
  components:{
    // TabBar,
    // TabBarItem
    MainTabBar
  }
}
</script>
<style>
    @import './assets/css/base.css';
    @import './assets/fonts/iconfont.css';
</style>
