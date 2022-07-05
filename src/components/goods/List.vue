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
            <td style="width: 50px">
                {{ item.price }}$
            </td>
            <td>
                 <button @click="$emit('click:basket', item)">add to chart</button>
            </td>
        </tr>
    </table>
</template>
<script>
export default {
    components: {},
    props: {
        items: Array,
        category: Object,
    },
    methods: {
        getItemsByCategory(id) {
            return this.items.filter((i) => i.categoryId == id);
        },
        itemChartClick(item){
            console.log(item);
        }
    },
};
</script>