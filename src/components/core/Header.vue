<template>
    <header class="header">
        <div class="container">
            <div class="d-flex justify-end">
                <div style="margin-right: 10px;">
                    Курс доллара 
                </div> 
                <Counter v-model="currencyStore.usdToRubRate">
                    <b>{{currencyStore.usdToRubRate}}</b>
                </Counter>
            </div>
        </div>
    </header>
</template>
<script>
import { mapStores } from 'pinia'
import { useStore as useCurrencyStore } from '@/stores/currency'
import Counter from '../Counter.vue'
export default {
    computed: {
        ...mapStores(useCurrencyStore)
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