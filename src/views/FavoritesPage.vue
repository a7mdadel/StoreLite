<template>
  <div class="container mt-5">
    <h1>Your Favorites</h1>
    <div v-if="favorites.items.length === 0">No favorites yet.</div>
    <div v-else>
      <div class="row">
        <div v-for="item in favorites.items" :key="item.id" class="col-md-4">
          <div class="card mb-3">
            <img :src="item.image" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5>{{ item.title }}</h5>
              <p>{{ item.price }} $</p>
              <button @click="favorites.remove(item.id)" class="btn btn-danger">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { favorites } from "../stores/favorites";
</script>
