import { defineStore } from "pinia";
import goodsApi from "../api/goods.api.js";

export const useStore = defineStore("category", {
  state: () => ({
    categories: [],
  }),
  actions: {
    fetchCategories() {
      this.categories = goodsApi.getCategories();
    },
  },
});
