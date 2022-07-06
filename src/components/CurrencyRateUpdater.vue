<template>
    <div></div>
</template>
<script>
import { useStore as useCurrencyStore } from "@/stores/currency";
import { mapActions } from "pinia";

export default {
    mounted() {
        setInterval(() => {
            const newRate = Math.floor(Math.random() * (80 - 20) + 20);
            this.updateUsdToRubRate(newRate);
        }, 1000 * 15);
    },
	methods: {
		...mapActions(useCurrencyStore, ['updateUsdToRubRate'])
	}
};
</script>