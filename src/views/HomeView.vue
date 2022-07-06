<template>
    <main>
        <section class="container wrapper">
            <Goods class="goods" />
            <Form class="form" />
            <Basket class="basket" />
        </section>
    </main>
</template>
<script>
import Goods from "@/components/Goods.vue";
import Basket from "@/components/Basket.vue";

import Form from "../components/Form.vue";

export default {
    components: {
        Goods,
        Basket,
        Form,
    },
};
</script>

<style scoped>
.wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows: 80px;
    column-gap: 2rem;
}
.goods {
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
}
.form {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 3;
}
.basket {
    grid-column-start: 4;
    grid-column-end: 6;
    grid-row-start: 4;
    grid-row-end: 4;
}

@media screen and (max-width: 1600px) {
    .wrapper {
        padding-inline: 20px;
    }
}
@media screen and (max-width: 1100px) {
    .wrapper {
        display: block;
    }
    .form{
        margin: 20px 0;
    }
}
</style>
