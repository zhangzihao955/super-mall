<template>

    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>

</template>
<script>
    // import BScroll from 'better-scroll'
export default {
    data() {
        return {
            // scroll:null
        }
    },
    mounted() {
        //ref如果绑定在组件中，那么通过this.$refs.refname拿到的是一个组件对象
        //ref如果绑定在普通元素上，那么通过this.$refs.refname拿到的是元素对象
    //     this.scroll = new BScroll(this.$refs.wrapper,{
    //         click:true,
    //         probeType:3,
    //         pullUpLoad:true
    //     });
    //     this.scroll.on('pullingUp',()=>{
    //         console.log('上拉')
    //     })
     },
}
</script>
<style scoped>

</style>