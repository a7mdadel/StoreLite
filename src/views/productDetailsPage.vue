<template>
  <div class="container py-5">
    <h1>Product Details</h1>
    <div v-if="product">
      <img
        style="width: 500px; height: 500px"
        :src="product.image"
        alt="Product Image"
        class="img-fluid mb-3"
      />
      <h2>{{ product.name }}</h2>
      <p class="lead">${{ product.price }}</p>
      <p>{{ product.description }}</p>
      <button
        @click="addToFavorites(product)"
        class="btn btn-outline-warning ms-2"
      >
        ❤️ Add to Favorites
      </button>
    </div>
    <div v-else>
      <p>Loading product...</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { favorites } from "../stores/favorites";

const route = useRoute();
const product = ref(null);

function addToFavorites(product) {
  favorites.add(product);
  alert("Added to Favorites!");
}
onMounted(async () => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${route.params.id}`
  );
  product.value = await response.json();
});
</script>

<style scoped>
h1 {
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}

img {
  max-width: 100%;
  border-radius: 10px;
}

button {
  margin-top: 1rem;
}
</style>
