import { createRouter, createWebHistory } from "vue-router";
// Importing views for the routes
import homePage from "../views/homePage.vue";
import productDetailsPage from "../views/productDetailsPage.vue";
import loginPage from "../views/loginPage.vue";
import registerPage from "../views/registerPage.vue";
import profilePage from "../views/profilePage.vue";
import cartPage from "@/views/cartPage.vue";
import FavoritesPage from "../views/FavoritesPage.vue";

// Defining the routes for the application
const routes = [
  { path: "/", name: "Home", component: homePage },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: productDetailsPage,
  },
  { path: "/login", name: "Login", component: loginPage },
  { path: "/register", name: "Register", component: registerPage },
  { path: "/profile", name: "Profile", component: profilePage },
  { path: "/cart", name: "Cart", component: cartPage },
  {
    path: "/favorites",
    name: "Favorites",
    component: FavoritesPage,
  },
];

// Creating the router
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
