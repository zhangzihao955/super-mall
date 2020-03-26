<template>
<van-sticky>
    <div class="nav-bar">
        <div class="left"><slot class="left"></slot></div>
        <div class="content"><slot class="content">购物街</slot></div>
        <div class="right"><slot class="right"></slot></div>
    </div>
</van-sticky>
</template>
<script>
   import { Sticky } from 'vant'
export default {
      components:{
      [Sticky.name]:Sticky
  }
}
</script>
<style scoped>
    .nav-bar{
        display: flex;
        line-height: 44px;
        background-color: palevioletred;
    }
    .left .right{
        width: 60px;
    }
    .content{
        flex: 1;
        text-align: center;
        color: wheat;
    }
</style>