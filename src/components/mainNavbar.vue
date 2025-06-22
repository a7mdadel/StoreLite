<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark text-light">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <a href=""> <img style="width: 40px" src="../assets/download.png" /></a
        >MyStore</RouterLink
      >

      <button
        class="navbar-toggler"
        style="background: #124e77 !important"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/profile">Profile</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/login">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/register">Register</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/cart">
              🛒 Cart ({{ cart.count() }})
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/favorites">
              ❤️ Favorites ({{ favorites.count() }})
            </RouterLink>
          </li>
          <li class="nav-item ms-4">
            <button @click="toggleMode" class="btn btn-primary my-2">
              Toggle Mode
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted } from "vue";
import { cart } from "../stores/cart";
import { favorites } from "../stores/favorites";
import { Collapse } from "bootstrap";

onMounted(() => {
  const navbar = document.querySelector(".navbar-collapse");
  const toggler = document.querySelector(".navbar-toggler");
  document.addEventListener("click", function (event) {
    const isClickInsideNavbar =
      navbar.contains(event.target) || toggler.contains(event.target);
    if (!isClickInsideNavbar && navbar.classList.contains("show")) {
      new Collapse(navbar).hide();
    }
  });
  const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbar.classList.contains("show")) {
        new Collapse(navbar).hide();
      }
    });
  });
});
function toggleMode() {
  const current = localStorage.getItem("theme") || "light";
  const next = current === "light" ? "dark" : "light";
  applyTheme(next);
  localStorage.setItem("theme", next);
}

function applyTheme(mode) {
  if (mode === "dark") {
    document.documentElement.style.setProperty("--bg-color", "#121212");
    document.documentElement.style.setProperty("--text-color", "#e0e0e0");
    document.documentElement.style.setProperty("--card-bg", "#1e1e1e");
    document.documentElement.style.setProperty("--link-color", "#ffffff");
    document.documentElement.style.setProperty("--button-bg", "#00bfff");
    document.documentElement.style.setProperty("--button-hover", "#009acd");
  } else {
    document.documentElement.style.setProperty("--bg-color", "#ffffff");
    document.documentElement.style.setProperty("--text-color", "#121212");
    document.documentElement.style.setProperty("--card-bg", "#f8f9fa");
    document.documentElement.style.setProperty("--link-color", "#121212");
    document.documentElement.style.setProperty("--button-bg", "#007bff");
    document.documentElement.style.setProperty("--button-hover", "#0056b3");
  }
}

onMounted(() => {
  const saved = localStorage.getItem("theme") || "light";
  applyTheme(saved);
});
</script>
<style scoped>
.navbarNav {
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--border-color);

  color: var(--text-color);
  a {
    color: var(--link-color);
  }
  a:hover {
    color: var(--link-hover-color);
  }
  button {
    background-color: var(--button-bg);
    color: var(--text-color);
  }
  button:hover {
    background-color: var(--button-hover);
  }
}
</style>
