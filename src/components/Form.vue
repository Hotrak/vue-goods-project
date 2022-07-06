<template>
    <div>
        <h2 class="title">Редактирование</h2>
        <div>
            <ui-input v-model="item.name" title="Наименование"/>
        </div>
        <div>
            <ui-input v-model="item.name" title="Цена (доллары)"/>
        </div>
        <div>
            <ui-input v-model="item.name" type="number" title="Количество"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {
                return {}
            }
        }
    }
}
</script>