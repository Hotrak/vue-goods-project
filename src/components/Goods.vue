<template>
    <div>
        <h2 class="title">Товары</h2>
        <GoodsTable
            :items="goods"
            :categories="categories"
            @click:basket="addToBasket"
            @click:select="editItem"
        />
        <Form :item="selectedItem"/>
    </div>
</template>
<script>
import GoodsTable from "@/components/GoodsTable.vue";
import { useStore as useGoodsStore } from "@/stores/goods";
import { useStore as useCategoryStore } from "@/stores/category";
import { useStore as useBasketStore } from "@/stores/basket";
import { useStore as useCurrencyStore } from "@/stores/currency";

import { mapActions, mapState } from "pinia";
 import jsonData from '../assets/goodsCategory.json'
import Form from "./Form.vue";

export default {
    components: {
        GoodsTable,
        Form
    },
    data() {
        return {
            selectedItem: undefined,
        }
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
        addToBasket(item) {
            this.addItem(item);
        },
        editItem(item){
            this.selectedItem = item;
        },
		fetchData(){
			this.fetchGoods();
        	this.fetchCategories();
		}
    },
};
</script>