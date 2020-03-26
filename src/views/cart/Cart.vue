<template>
    <div class="cart">
        <cart-nav-bar></cart-nav-bar>
        <cart-list></cart-list>
        <cart-button></cart-button>
    </div>
</template>
<script>
    import CartNavBar from './childrenComps/CartNavBar.vue'
    import CartList from './childrenComps/CartList.vue'
    import CartButton from './childrenComps/CartButton.vue'
export default {
    components:{
        CartNavBar,
        CartList,
        CartButton
    }
}
</script>
<style scoped>
    .cart{
        padding-bottom: 98px
    }
</style>