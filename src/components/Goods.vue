<template>
  <div>
    <h2 class="title">Товары</h2>
    <GoodsTable
      :items="goodsStore.goods"
      :categories="categoryStore.categories"
      @click:basket="addToBasket"
      @click:select="editItem"
    />
  </div>
</template>
<script>
import GoodsTable from "@/components/GoodsTable.vue";
import { useStore as useGoodsStore } from "@/stores/goods";
import { useStore as useCategoryStore } from "@/stores/category";
import { useStore as useBasketStore } from "@/stores/basket";
import { useStore as useCurrencyStore } from "@/stores/currency";

import { mapActions, mapState, mapStores } from "pinia";

export default {
  components: {
    GoodsTable,
  },
  computed: {
    ...mapState(useCurrencyStore, ["usdToRubRate"]),
    ...mapStores(useGoodsStore, useCategoryStore),
  },
  watch: {
    usdToRubRate() {
      this.fetchData();
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions(useBasketStore, ["addItem"]),

    addToBasket(item) {
      this.addItem(item);
    },
    editItem(item) {
      this.goodsStore.selectedItem = item;
    },
    fetchData() {
      this.goodsStore.fetchGoods();
      this.categoryStore.fetchCategories();
    },
  },
};
</script>
