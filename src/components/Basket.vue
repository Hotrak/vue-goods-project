
<template>
    <div>
        <h2 class="title">Корзина</h2>
        <template v-if="formattedItems.length">
            <table v-if="formattedItems">
                <tr v-for="item in formattedItems" :key="item.id">
                    <td style="width: 400px">
                        {{ item.name }}
                    </td>
                    <td style="width: 110px;" >
                        <Counter v-model="item.count" @update:modelValue="setCount(item, $event)"/>
                    </td>
                    <td style="width: 100px" class="text-end">
                        <GoodsPrice :item="item"/>
                    </td>
                    <td>
                        <button @click="deleteItem(item)">Удалить</button>
                    </td>
                </tr>
                <tr style="border:none">
                    <td colspan="4" style="border:none" class="text-end">
                        Итого: <b>{{ formatRUBPrice(totalPrice) }}</b>
                    </td>
                </tr>
            </table>
           
        </template>

        <div v-else>Пусто</div>
    </div>
</template>
<script>
import { useStore as useBasketStore } from "@/stores/basket";
import { mapState, mapActions } from "pinia";
import cashMixin from "@/mixins/cash";
import GoodsPrice from "./GoodsPrice.vue";
import Counter from "./Counter.vue";

export default {
    mixins: [cashMixin],
    computed: {
        ...mapState(useBasketStore, ["formattedItems", "totalPrice", "items"]),
    },
    methods: {
        ...mapActions(useBasketStore, ["deleteItem", "setItemCount"]),
        setCount(item, count){
            if(this.validateCount(item, count))
                this.setItemCount({item, count});
        },
        validateCount(item, count){
            return count > 0 && count <= item.totalCount;
        }
    },
    components: { GoodsPrice, Counter }
};
</script>