
<template>
    <div>
        <h2 class="title">Корзина</h2>
        <template v-if="formattedItems.length">
            <table v-if="formattedItems">
                <tr>
                    <th class="text-start">Наименование</th>
                    <th>Кол-во</th>
                    <th>Цена</th>
                </tr>
                <tr v-for="item in formattedItems" :key="item.id">
                    <td style="width: 60%">
                        {{ item.name }}
                    </td>
                    <td style="width: 110px">
                        <Counter
                            v-model="item.count"
                            @update:modelValue="setCount(item, $event)"
                        />
                    </td>
                    <td style="min-width: 90px" class="text-end">
                        <GoodsPrice :item="item">
                            <template #value="{ item, format }">
                                {{ format(item.rubPrice * item.count) }}
                            </template>
                        </GoodsPrice>
                    </td>
                    <td style="width: 100px">
                        <div class="d-flex justify-center">
                            <button @click="deleteItem(item)">Удалить</button>
                        </div>
                    </td>
                </tr>
                <tr style="border: none">
                    <td colspan="4" style="border: none" class="text-end">
                        Итого: <b>{{ formatRUBPrice(totalPrice) }}</b>
                    </td>
                </tr>
            </table>
        </template>

        <div v-else class="text-center">Пусто</div>
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
        setCount(item, count) {
            if (this.validateCount(item, count))
                this.setItemCount({ item, count });
        },
        validateCount(item, count) {
            return count > 0 && count <= item.totalCount;
        },
    },
    components: { GoodsPrice, Counter },
};
</script>