import { defineStore } from "pinia";
import goodsApi from "../api/goods.api.js";

import { useStore as useCurrencyStore } from './currency'

export const useStore = defineStore("goods", {
    state: () => ({
        goods: [],
    }),
    actions: {
        fetchGoods() {
			const currencyStore = useCurrencyStore();
			// currencyStore.usdToRubRate
            this.goods = goodsApi.getGoods().map(i => {
				i.rubPrice = i.price * currencyStore.usdToRubRate;
				return i;
			});
        },
    },
});
