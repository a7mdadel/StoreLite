<template>
  <div class="container py-5">
    <h1>Login</h1>
    <form class="w-50 mx-auto">
      <div class="mb-3">
        <label>Email address</label>
        <input type="email" class="form-control" placeholder="Enter email" />
      </div>
      <div class="mb-3">
        <label>Password</label>
        <input type="password" class="form-control" placeholder="Password" />
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
    </form>
  </div>
</template>

<script setup></script>

<style scoped>
h1 {
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
}

form {
  max-width: 400px;
}

button {
  margin-top: 1rem;
}
</style>
