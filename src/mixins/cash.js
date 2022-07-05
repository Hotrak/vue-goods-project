
import { useStore as useCurrencyStore } from "@/stores/currency";
import { mapState } from 'pinia';
export default {
	methods: {
		...mapState(useCurrencyStore, ['usdToRubRate']),
		convertUsdToRub(value){
			const currencyStore = useCurrencyStore();
			return value * currencyStore.usdToRubRate;
		},
		convertUsdToRubFormat(value){
			return this.formatRUBPrice(this.convertUsdToRub(value));
		},
		formatRUBPrice(number){
			return number.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })
		}
	},
}