import { defineStore } from "pinia";

export const useStore = defineStore("currency", {
    state: () => ({
        usdToRubRate: 20,
    }),
	actions: {
		updateUsdToRubRate(value){
			this.usdToRubRate = value;
		}
	}
   
});
