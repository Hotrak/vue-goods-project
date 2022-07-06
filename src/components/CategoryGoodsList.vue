<template>
    <table>
        <tr>
            <td>
                <h2>{{ category.name }}</h2>
            </td>
        </tr>
        <tr v-for="item in items" :key="item.id">
            <td style="width: 500px">
                {{ item.name }} <span></span>
            </td>
            <td style="width: 80px">
                {{ formatRUBPrice(item.rubPrice) }}
            </td>
            <td>
                 <button v-if="!isItemInBasket(item)" @click="$emit('click:basket', item)">В корзину</button>
				 <div v-else>
					В корзине
				 </div>
            </td>
        </tr>
    </table>
</template>
<script>
import { useStore as useBasketStore } from "@/stores/basket";

import cashMixin from '@/mixins/cash';
import { mapState } from 'pinia';
export default {
	mixins: [cashMixin],
    props: {
        items: Array,
        category: Object,

    },
    computed: {
        ...mapState(useBasketStore, ['isItemInBasket'])
    }
};
</script>