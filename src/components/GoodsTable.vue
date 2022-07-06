<template>
  <table>
    <template v-for="category in categories" :key="category.id">
      <template v-if="getItemsByCategory(category.id).length">
        <tr>
          <td colspan="4">
            <h3>{{ category.name }}</h3>
          </td>
        </tr>
        <tr v-for="item in getItemsByCategory(category.id)" :key="item.id">
          <td style="width: 65%">
            {{ item.name }}
          </td>
          <td style="width: 120px" class="text-end">
            <GoodsPrice :item="item" />
          </td>
          <td>
            <div class="d-flex justify-center">
              <button @click="$emit('click:select', item)">
                Редактировать
              </button>
            </div>
          </td>
          <td style="min-width: 100px">
            <div class="d-flex justify-center">
              <button
                v-if="!isItemInBasket(item)"
                @click="$emit('click:basket', item)"
              >
                В корзину
              </button>
              <div v-else>В корзине</div>
            </div>
          </td>
        </tr>
      </template>
    </template>
  </table>
</template>
<script>
import { useStore as useBasketStore } from "@/stores/basket";
import GoodsPrice from "./GoodsPrice.vue";
import { mapState } from "pinia";
export default {
  components: {
    GoodsPrice,
  },
  props: {
    items: Array,
    categories: Object,
  },
  computed: {
    ...mapState(useBasketStore, ["isItemInBasket"]),
  },
  methods: {
    getItemsByCategory(id) {
      return this.items.filter((i) => i.categoryId == id);
    },
  },
};
</script>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}
td,
th,
tr {
  border: 1px solid #616161;
}
table tr td,
th {
  padding: 5px 10px;
  vertical-align: top;
  height: 40px;
}
</style>
