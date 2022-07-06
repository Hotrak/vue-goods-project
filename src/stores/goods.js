import { defineStore } from "pinia";
import goodsApi from "../api/goods.api.js";

import { useStore as useCurrencyStore } from "./currency";

export const useStore = defineStore("goods", {
    state: () => ({
        goods: [],
        selectedItem: undefined,
    }),
    actions: {
        fetchGoods() {
            this.goods = goodsApi.getGoods().map((item) => {
                this.setRubPrice(item);

                return item;
            });

            if (this.selectedItem) {
                this.selectedItem = this.goods.find(
                    (i) => i.id == this.selectedItem.id
                );
            }
        },
        setRubPrice(item) {
            const currencyStore = useCurrencyStore();
            item.rubPrice = item.price * currencyStore.usdToRubRate;

            item.oldRubPrice = this.goods.find(
                (i) => i.id == item.id
            )?.rubPrice;
        },
    },
});
