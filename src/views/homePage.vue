<template>
  <div class="container py-5">
    <h1 class="mb-4">Demo Products</h1>
    <div class="row g-4">
      <div v-for="product in products" :key="product.id" class="col-md-4">
        <div class="card h-100">
          <img :src="product.image" class="card-img-top" :alt="product.name" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">${{ product.price }}</p>
            <router-link
              :to="`/product/${product.id}`"
              class="btn btn-primary m-2"
            >
              Details
            </router-link>
            <button @click="addToCart(product)" class="btn btn-primary m-2">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { cart } from "../stores/cart";

const products = ref([]);

onMounted(async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  products.value = await response.json();
});
function addToCart(product) {
  cart.add(product);
  alert("Product added to cart!");
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  text-align: center;
}

.card {
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.03);
}
</style>
