<template>
      <tab-bar>
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
    </tab-bar>
</template>
<script>
import TabBar from './TabBar.vue'
import TabBarItem from './TabBarItem.vue'
export default {
    components:{
        TabBar,
        TabBarItem
    }
}
</script>