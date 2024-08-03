import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../moduls/landing/pages/MainPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Main",
            component: MainPage
        },
        {
            path: "/details",
            name: "Details",
            component: () => import('../moduls/landing/pages/DetailsPage.vue"),
        },
        {
            path: "/contact",
            name: "Contact",
            component: () => import("../moduls/landing/pages/ContactPage.vue"),
        },
        {
            path: "/prices",
            name: "Prices",
            component: () => import("../moduls/landing/pages/PricesPage.vue"),
        },
    ],
});

export default router;