import { defineStore } from "pinia";
import goodsApi from "../api/goods.api.js";

// useStore could be anything like useUser, useCart
// the first argument is a unique id of the store across your application
export const useStore = defineStore("basket", {
    state: () => ({
        items: [],
    }),
    actions: {
        deleteItem(item){
            this.items = this.items.filter((i) => i.id !== item.id);
        },
        addItem(item) {
            this.items.push(item);
        }
    },
});
