<template>
<!-- <van-sticky> -->

    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="客服" />
  <van-goods-action-icon icon="home-o" text=店铺  />
  <van-goods-action-icon icon="star-o" text="收藏"  />
  <van-goods-action-button type="warning" text="加入购物车" @click="addshopcart"/>
  <van-goods-action-button type="danger" text="立即购买" />
</van-goods-action>

<!-- </van-sticky> -->
</template>
<script>
    import { GoodsAction, GoodsActionIcon, GoodsActionButton, Toast } from 'vant';
    // import { Sticky } from 'vant';
export default {
    components:{
        [GoodsAction.name]:GoodsAction,
        [GoodsActionIcon.name]:GoodsActionIcon,
        [GoodsActionButton.name]:GoodsActionButton,
        [Toast.name]:Toast
        // [Sticky.name]:Sticky
    },
    methods: {
        addshopcart(){
            this.$emit('addshopcart');
                 this.$toast('成功');
                // this.$store.commit('showLoading')
        }
    },
}
</script>
<style scoped>

</style>