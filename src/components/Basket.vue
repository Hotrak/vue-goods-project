
<template>
    <table >
        <tr v-for="item in items" >
            <td>
                {{item.name}}
            </td>
            <td>
               <button @click="deleteItem(item)">Удалить</button>
            </td>
        </tr>
    </table>
</template>
<script>
import { useStore as useBasketStore } from "@/stores/basket";
import { mapState, mapActions } from "pinia";
export default {
    computed: {
        ...mapState(useBasketStore, ["items"]),
    },
    methods: {
        ...mapActions(useBasketStore, ['deleteItem']),
    }
}

</script>