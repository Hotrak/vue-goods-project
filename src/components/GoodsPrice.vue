<template>
    <div>
        <div>
            <slot name="value" :item="item" :format="formatRUBPrice">{{ formatRUBPrice(item.rubPrice) }}</slot>
            <template v-if="this.item.oldRubPrice">
                <span v-if="isPriceUp" class="arrow green">🠕</span>
                <span v-else class="arrow red">🠗</span>
            </template>
        </div>
    </div>
</template>
<script>

import cashMixin from "@/mixins/cash";
export default {
    mixins: [cashMixin],
    props: {
        item: Object,
    },
    computed: {
        isPriceUp() {
            return this.item.oldRubPrice <= this.item.rubPrice;
        },
    },
};
</script>

<style>

.green {
    color: #31ae18;
}
.red {
    color: #e62c2c;
}
</style>