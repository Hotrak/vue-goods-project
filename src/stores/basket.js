import { defineStore } from "pinia";
import { useStore as useGoodsStore } from './goods'

export const useStore = defineStore("basket", {
    state: () => ({
        items: [],
    }),
    actions: {
        deleteItem(item){
			item.basketCount = 0;
            this.items = this.items.filter((i) => i !== item.id);
        },
        addItem(item) {
			item.basketCount = 1;
            this.items.push(item.id);
        }
    },
	getters: {
		totalPrice: (state) => state.formattedItems.reduce((x, y)=> x + y.price, 0),
		formattedItems(state) {
			const goodsStore = useGoodsStore();
			return state.items.map(i => {
				
				return goodsStore.goods.find(item => item.id == i);
			})
		}
	}
});
