<template>
    <div class="detailsinfo" v-if="Object.keys(goods).length !==0">
        <div class="info_title">{{goods.title}}</div>
        <div class="info_price">
            <span class="n_price">{{goods.newPrice}}</span>
            <span class="o_price">{{goods.oldPrice}}</span>
            <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
        </div>
        <div class="info_other">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="info_services">
            <span class="info_services_item" v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        goods:{
            type:Object
        }
    }
}
</script>
<style  scoped>
    .detailsinfo{
        margin-top: 15px;
        padding: 0 8px;
        border-bottom: 5px solid greenyellow;
    }
    .info_title{
        color: #222;
    }
    .info_price{
        margin-top: 10px;
    }
    .info_price .n_price{
        font-size: 24px;
        color: deeppink;
    }
    .info_price .o_price{
        font-size: 13px;
        text-decoration: line-through;
        margin-left: 5px;
    }
    .info_price .discount{
        font-size: 12px;
        padding: 2px 5px;
        color: #fff;
        background-color: deeppink;
        border-radius:8px;
        margin-left: 5px;
        /* 让元素上浮一些使用相对定位即可 */
        position: relative;
        top: -5px;
    }
    .info_other{
        margin-top: 15px;
        line-height: 30px;
        display: flex;
        font-size: 13px;
        border-bottom: 1px solid teal;
        justify-content: space-between 
    }
    .info_services{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        line-height: 40px;
    }
    .info_services_item img{
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
    }
    .info_services_item span{
        font-size: 13px;
        color: #333;
    }
</style>