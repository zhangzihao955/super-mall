<template>
       <van-swipe :autoplay="1500" indicator-color="white">
        <van-swipe-item v-for="(image,index) in topImages" :key="index">
          <img :src="image" style="width:100%;height:300px">
        </van-swipe-item>
  </van-swipe>
</template>
<script>
    import { Swipe, SwipeItem } from 'vant'
export default {
    props:{
        topImages:{
            type:Array,  
        }
    },
     components:{
        [SwipeItem.name]:SwipeItem,
        [Swipe.name]:Swipe
    },

}
</script>
<style scoped>

</style>