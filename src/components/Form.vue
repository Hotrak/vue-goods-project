<template>
    <div>
        <div>
            <input v-model="item.name">
        </div>
        <div>
            <input v-model="item.price">
        </div>
        <div>
            <input v-model="item.price">
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