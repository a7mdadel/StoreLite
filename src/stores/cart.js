import { reactive, watch } from "vue";

export const cart = reactive({
  items: [],

  add(item) {
    this.items.push(item);
  },

  remove(index) {
    this.items.splice(index, 1);
  },

  clear() {
    this.items = [];
  },

  count() {
    return this.items.length;
  },

  total() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
});
watch(
  () => cart.items,
  (newItems) => {
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  },
  { deep: true }
);
