<template>
    <div>{{formatRUBPrice(item.rubPrice)}}
    <span v-if="isPriceUp" class="arrow green">🠕</span>
    <span v-else class="arrow red">🠗</span>
    </div>
</template>
<script>

// Стрелки ← ↑ → ↓ △ ▽ ◁ ▷ Cимволы стрелок и ...
import cashMixin from "@/mixins/cash";
export default {
    mixins: [cashMixin],
    props: {
        item: Object,
    },
    computed: {
        isPriceUp(){
            return this.item.oldRubPrice <= this.item.rubPrice;
        }
    }
};
</script>

<style>
.arrow {
    font-size: 18px;
}
.green{
    color: #31ae18;
}
.red {
    color: #e62c2c;
}

</style>