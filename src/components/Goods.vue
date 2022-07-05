<template>
    <div>
        <template v-for="category in categories" :key="category.id">
            <GoodsList
                v-if="getItemsByCategory(category.id).length"
                :items="getItemsByCategory(category.id)"
                :category="category"
                @click:basket="addToBasket"
            />
        </template>
    </div>
</template>
<script>
import GoodsList from "@/components/goods/List.vue";
import { useStore as useGoodsStore } from "@/stores/goods";
import { useStore as useCategoryStore } from "@/stores/category";
import { useStore as useBasketStore } from "@/stores/basket";

import { mapActions, mapState } from "pinia";

export default {
    components: {
        GoodsList,
    },
    computed: {
        ...mapState(useGoodsStore, ["goods"]),
        ...mapState(useCategoryStore, ["categories"]),
        ...mapState(useBasketStore, ["items"]),
    },
    mounted() {
        this.fetchGoods();
        this.fetchCategories();
        console.log("goods is", this.goods);
    },
    methods: {
        ...mapActions(useGoodsStore, ["fetchGoods"]),
        ...mapActions(useCategoryStore, ["fetchCategories"]),
        ...mapActions(useBasketStore, ["addItem"]),
        getItemsByCategory(id) {
            return this.goods.filter((i) => i.categoryId == id);
        },
        addToBasket(item) {
            this.addItem(item);
        },
    },
};
</script>