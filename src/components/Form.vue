<template>
  <div>
    <h2 class="title">Редактирование</h2>
    <form class="form" @submit.prevent>
      <div class="form__element1">
        <ui-input v-model="item.name" title="Наименование" />
      </div>
      <div class="form__element2">
        <ui-input
          v-model="item.price"
          @input="updateItemPrice"
          title="Цена (доллары США)"
          type="number"
        />
      </div>
      <div class="form__element3">
        <ui-input v-model="item.totalCount" type="number" title="Количество" />
      </div>
    </form>
  </div>
</template>

<script>
import { useStore as useGoodsStore } from "@/stores/goods";
import { mapStores } from "pinia";

export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  computed: {
    ...mapStores(useGoodsStore),
  },
  methods: {
    updateItemPrice(value) {
      this.goodsStore.setRubPrice(this.item);
    },
  },
};
</script>

<style>
.form {
  display: grid;
  row-gap: 0.5rem;
  column-gap: 0.5rem;
}
.form__element1 {
  grid-column-start: 1;
  grid-column-end: 3;
}

.form__element2 {
  grid-column-start: 1;
  grid-column-end: 2;
}
.form__element3 {
  grid-column-start: 2;
  grid-column-end: 3;
}
.form__element4 {
  grid-column-start: 1;
  grid-column-end: 3;
  display: flex;
  justify-content: end;
  margin-top: 10px;
}
</style>
