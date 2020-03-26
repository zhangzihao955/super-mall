<template>
    <div v-if="Object.keys(detailInfo).length !=0" class="goods_info">
        <div class="info_desc clear_fix">
            <div class="start">

            </div>
            <div class="desc">{{detailInfo.desc}}</div>
            <div class="end"></div>
        </div>
        <div class="info_key">{{detailInfo.detailImage[0].key}}</div>
        <div class="info_list">
            <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" style="width:100%">
        </div>
    </div>
</template>
<script>
export default {
    props:{
        detailInfo:{
            type:Object
        }
    }
}
</script>
<style scoped>

</style>