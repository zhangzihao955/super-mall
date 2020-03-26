<template>
<!-- <van-sticky> -->
    <div id="tab-bar">
      <slot></slot>
    </div>
<!-- </van-sticky> -->
</template>
<script>
    // import { Sticky } from 'vant'
export default {
//   components:{
//       [Sticky.name]:Sticky
//   }
}
</script>
<style scoped>
    #tab-bar{
        display: flex;
        background-color: #f6f6f6;
        position:fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -3px 1px rgba(100, 100, 100, .3)
    }
   
</style>