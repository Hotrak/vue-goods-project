import { defineStore } from "pinia";
import { useStore as useGoodsStore } from "./goods";

export const useStore = defineStore("basket", {
  state: () => ({
    items: [],
  }),
  actions: {
    deleteItem(item) {
      this.items = this.items.filter((i) => i.id !== item.id);
    },
    addItem(item) {
      this.items.push({
        id: item.id,
        count: 1,
      });
    },
    setItemCount({ item, count }) {
      const exItem = this.items.find((i) => i.id == item.id);
      exItem.count = count;
    },
  },
  getters: {
    totalPrice: (state) =>
      state.formattedItems.reduce((x, y) => x + y.rubPrice * y.count, 0),
    formattedItems(state) {
      const goodsStore = useGoodsStore();
      return state.items.map((i) => {
        return {
          ...goodsStore.goods.find((item) => item.id == i.id),
          count: i.count,
        };
      });
    },
    isItemInBasket: (state) => (item) =>
      !!state.items.find((i) => i.id == item.id),
  },
});
