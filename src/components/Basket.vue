
<template>
<div>
	<h2>Корзина</h2>
    <table >
        <tr v-for="item in formattedItems" :key="item.id">
            <td style="width: 300px">
                {{item.name}}
            </td>
            <td style="width: 10px">
                <input v-model="item.basketCount" type="number">
            </td>
            <td style="width: 100px">
				{{formatRUBPrice(item.rubPrice)}}
            </td>
            <td>
               <button @click="deleteItem(item)">Удалить</button>
            </td>
        </tr>
    </table>
	{{convertUsdToRubFormat(totalPrice)}}
</div>
</template>
<script>
import { useStore as useBasketStore } from "@/stores/basket";
import { mapState, mapActions } from "pinia";
import myMixin from '@/mixins/cash';

export default {
	mixins: [myMixin],
    computed: {
        ...mapState(useBasketStore, ["formattedItems", 'totalPrice']),
    },
    methods: {
        ...mapActions(useBasketStore, ['deleteItem']),
    }
}

</script>