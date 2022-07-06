<template>
    <div>
        <span>{{title}}</span>
        <div>
            <input v-model="content" :type="type">
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            modelValue: [Number, String],
            title: String,
            type: String,
        },
        data(){
            return {
                content: this.modelValue,
            }
        },
        watch: {
            modelValue(value){
                this.content = value;
            },
            content(content){
                this.$emit('update:modelValue', content);
            }
        }
    }
</script>

<style>
input {
    height: 35px;
    padding-left: 5px;
    width: 100%;
}
</style>