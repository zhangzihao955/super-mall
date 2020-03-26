<template>
    <!-- <van-swipe :autoplay="1200" indicator-color="white">
      <van-swipe-item v-for="(item,index) in images" :key="index">
        <img style='width:100%' :src="item" />
      </van-swipe-item>
    </van-swipe> -->
   <van-swipe class="my-swipe" :autoplay="1500" indicator-color="white">
        <van-swipe-item v-for="(image,index) in banners" :key='index'>
            <a :href="image.link"><img style='width:100%' :src="image.image"></a>
        </van-swipe-item>
  </van-swipe>
</template>
<script>
import { Swipe, SwipeItem } from 'vant'
export default {
    components:{
        [SwipeItem.name]:SwipeItem,
        [Swipe.name]:Swipe
    },
    props:{
        banners:null
    }
}
</script>
<style scoped>
    .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      text-align: center;
      /* background-color: #39a9ed; */
}
</style>