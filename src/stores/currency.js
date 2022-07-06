import { defineStore } from "pinia";

export const useStore = defineStore("currency", {
    state: () => ({
        usdToRubRate: 44,
    }),
	actions: {
		updateUsdToRubRate(value){
			this.usdToRubRate = value;
		}
	}
   
});
