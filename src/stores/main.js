import { defineStore } from "pinia";
import goodsApi from "../api/goods.api.js";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
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
