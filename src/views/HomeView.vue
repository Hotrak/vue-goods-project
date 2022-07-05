<template>
    <main>
        <div style="display: flex; align-items: start;">
            <Goods/>
            <Basket/>

        </div>
    </main>
</template>
<script>
import Goods from "@/components/Goods.vue";
import Basket from "@/components/Basket.vue"

export default {
    components: {
        Goods, Basket
    },
    
};
</script>
