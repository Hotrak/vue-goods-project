import { defineStore } from "pinia";
import goodsApi from "../api/goods.api.js";

export const useStore = defineStore("main", {
    state: () => ({
        goods: [],
    }),
    getters: {
        getGoods: (state) => state.goods,
    },
    actions: {
        fetchGoods() {
            this.goods = goodsApi.getGoods();
        },
    },
});
