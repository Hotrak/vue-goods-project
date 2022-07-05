<template>
    <main>
		{{jsonArray[1].G}}
		<button @click="updateUsdToRubRate(usdToRubRate+1)">asdasd</button>
        <div style="display: flex; align-items: start;">
            <Goods/>
            <Basket/>
        </div>
    </main>
</template>
<script>
import Goods from "@/components/Goods.vue";
import Basket from "@/components/Basket.vue"

 import jsonData from '../assets/goodsCategory.json'

import { useStore as useCurrencyStore } from "@/stores/currency";

import { mapActions, mapState} from "pinia";


export default {
    components: {
        Goods, Basket
    },
	data: () => {
		return {
			jsonArray: jsonData,
		}
	},
	computed: {
		...mapState(useCurrencyStore, ['usdToRubRate'])
	},
	mounted(){
		// this.usdToRubRate = 90;
		this.updateUsdToRubRate(90);
	},
	methods: {
		...mapActions(useCurrencyStore, ['updateUsdToRubRate'])
	}
    
};
</script>
