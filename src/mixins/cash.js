
export default {
	methods: {
		formatRUBPrice(number){
			return number.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', maximumFractionDigits: 0 })
		}
	},
}