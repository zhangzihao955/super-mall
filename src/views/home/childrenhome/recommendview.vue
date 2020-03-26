<template>
    <div class="recommendview">
        <div class="recommendviewitem" v-for='(image,index) in recommend' :key='index'>
            <a :href="image.link">
                <img :src="image.image" alt="">
                <div>{{image.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        recommend:{
            type:Array
        }
    }
}
</script>
<style scoped>
    .recommendview{
        display:flex;
        font-size: 14px;
        padding: 15px 0 20px 0;
        border-bottom: 4px solid #eee;
        /* text-align: center; */
    }
    .recommendviewitem{
        /* flex: auto; */
        flex: 1;
        margin: 5px 5px;
        text-align: center;
    }
      .recommendviewitem img{
        max-width: 100%;
        margin-bottom: 10px;
      }
</style>