import { reactive, watch } from "vue";

export const favorites = reactive({
  items: [],

  add(item) {
    if (!this.items.find((i) => i.id === item.id)) {
      this.items.push(item);
    }
  },

  remove(id) {
    this.items = this.items.filter((item) => item.id !== id);
  },

  count() {
    return this.items.length;
  },
});
// Load favorites from localStorage if available;
watch(
  () => favorites.items,
  (newItems) => {
    localStorage.setItem("favoritesItems", JSON.stringify(newItems));
  },
  { deep: true }
);
