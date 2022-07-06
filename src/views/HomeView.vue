<template>
    <main>
        <section class="container goods-section">
            <Goods class="goods-section__goods" />
            <Form class="goods-section__form" :item="goodsStore.selectedItem"/>
            <Basket class="goods-section__basket" />
        </section>
    </main>
</template>
<script>
import Goods from "@/components/Goods.vue";
import Basket from "@/components/Basket.vue";
import Form from "../components/Form.vue";
import { mapStores } from "pinia"; 

import { useStore as useGoodsStore } from "@/stores/goods";

export default {
    components: {
        Goods,
        Basket,
        Form,
    },
     computed: {
        ...mapStores(useGoodsStore)
    },
};
</script>

<style scoped>
.goods-section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 70px;
    column-gap: 2rem;
}
.goods-section__goods {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
}
.goods-section__form {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
}
.goods-section__basket {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 4;
    grid-row-end: 4;
}

@media screen and (max-width: 1600px) {
    .goods-section {
        padding-inline: 20px;
    }
}
@media screen and (max-width: 1100px) {
    .goods-section {
        display: block;
    }
    .goods-section__form{
        margin: 20px 0;
    }
}
</style>
