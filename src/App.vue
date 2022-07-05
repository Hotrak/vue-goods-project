<template>
    <Header/>
    <RouterView />
</template>

<script>
import Header from '@/components/core/Header.vue'
export default {
    components: {
        Header,
    }
}
</script>
<style>
@import "@/assets/base.css";

</style>
