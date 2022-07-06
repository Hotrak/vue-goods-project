<template>
    <main>
        <section class="container" style="display: flex; align-items: start; justify-content: space-between;">
            <Goods style="margin-right: 20px"/>
            <Basket style="min-width: 45%"/>
        </section>
    </main>
</template>
<script>
import Goods from "@/components/Goods.vue";
import Basket from "@/components/Basket.vue"

import { useStore as useCurrencyStore } from "@/stores/currency";

import { mapActions, mapState} from "pinia";


export default {
    components: {
        Goods, Basket
    },
	data: () => {
		return {
		}
	},
	computed: {
		...mapState(useCurrencyStore, ['usdToRubRate'])
	},
	mounted(){
		this.updateUsdToRubRate(45);
	},
	methods: {
		...mapActions(useCurrencyStore, ['updateUsdToRubRate'])
	}
    
};
</script>
