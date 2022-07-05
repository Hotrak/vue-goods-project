<template>
    <div>
        <template v-for="category in categories" :key="category.id">
            <CategoryGoodsList
                v-if="getItemsByCategory(category.id).length"
                :items="getItemsByCategory(category.id)"
                :category="category"
                @click:basket="addToBasket"
            />
        </template>
    </div>
</template>
<script>
import CategoryGoodsList from "@/components/CategoryGoodsList.vue";
import { useStore as useGoodsStore } from "@/stores/goods";
import { useStore as useCategoryStore } from "@/stores/category";
import { useStore as useBasketStore } from "@/stores/basket";
import { useStore as useCurrencyStore } from "@/stores/currency";

import { mapActions, mapState } from "pinia";
 import jsonData from '../assets/goodsCategory.json'

export default {
    components: {
        CategoryGoodsList,
    },
    computed: {
        ...mapState(useGoodsStore, ["goods"]),
        ...mapState(useCategoryStore, ["categories"]),
        ...mapState(useBasketStore, ["items"]),
        ...mapState(useCurrencyStore, ["usdToRubRate"]),
    },
	watch: {
		usdToRubRate(){
			this.fetchData();
		}
	},
    mounted() {
		this.fetchData();
		console.log(this.usdToRubRate, "+++");
		// setInterval(this.fetchData, 3000)

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
		fetchData(){
			this.fetchGoods();
        	this.fetchCategories();
		}
    },
};
</script>