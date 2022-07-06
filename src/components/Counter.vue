<template>
    <div class="d-flex">
        <button style="width: 25px" @click="updateValue(modelValue - 1)">
            -
        </button>
        <div class="text-center" style="width: 30px; margin-inline: 5px">
            <slot>
                {{ modelValue }}
            </slot>
        </div>
        <button style="width: 25px" @click="updateValue(modelValue + 1)">
            +
        </button>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: [Number,String],
    },
    methods: {
        updateValue(value){
            this.$emit('update:modelValue', value)
        }
    }
};
</script>