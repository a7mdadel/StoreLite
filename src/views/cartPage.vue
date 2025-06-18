<template>
  <div class="container mt-5">
    <h1>Your Cart</h1>
    <div v-if="cart.items.length === 0">Your cart is empty</div>
    <div v-else>
      <div v-for="(item, index) in cart.items" :key="index" class="card mb-3">
        <div class="card-body">
          <img :src="item.image" class="w-25" alt="Product Image" />
          <h5>{{ item.title }}</h5>
          <p>{{ item.price }} $</p>
          <button @click="cart.remove(index)" class="btn btn-danger">
            Remove
          </button>
        </div>
      </div>
    </div>
    <div v-if="cart.items.length > 0" class="mt-3">
      <h3>Total: {{ cart.total().toFixed(2) }} $</h3>
      <button @click="cart.clear()" class="btn btn-warning">Clear Cart</button>
    </div>
  </div>
</template>

<script setup>
import { cart } from "../stores/cart";
</script>
