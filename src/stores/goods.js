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
            this.goods = goodsApi.getGoods().map(item => {
				item.rubPrice = item.price * currencyStore.usdToRubRate;

                item.oldRubPrice = this.goods.find(
                    (i) => i.id == item.id
                )?.rubPrice;
				return item;
			});
        },
    },
});
