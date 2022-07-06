<template>
    <header class="header">
        <div class="container">
            <div class="d-flex justify-end">
                <div style="margin-right: 10px;">
                    Курс доллара 
                </div> 
                <Counter v-model="usdToRubRate" @update:modelValue="updateUsdToRubRate">
                    <b>{{usdToRubRate}}</b>
                </Counter>
            </div>
        </div>
    </header>
</template>
<script>
import { mapState, mapActions } from 'pinia'
import { useStore as useCurrencyStore } from '@/stores/currency'
import Counter from '../Counter.vue'
export default {
    computed: {
        ...mapState(useCurrencyStore, ["usdToRubRate"])
    },
    methods: {
        ...mapActions(useCurrencyStore, ['updateUsdToRubRate'])
    },
    components: { Counter }
}
</script>
<style scoped>
    .header{
        background-color: rgb(0, 0, 0);
        color: white;
        padding: 10px;
    }
</style>