import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../moduls/landing/pages/MainPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Main", //route name
            component: () => import("../moduls/landing/layouts/LandingLayout.vue"),
            children: [
                {
                    path: "/",
                    name: "MainPage", //route name
                    component: MainPage,
                },
                {
                    path: "/details",
                    name: "Details", //route name
                    component: () => import("../moduls/landing/pages/DetailsPage.vue"),
                },
                {
                    path: "/contact",
                    name: "Contact", //route name
                    component: () => import("../moduls/landing/pages/ContactPage.vue"),
                },
                {
                    path: "/prices",
                    name: "Prices", //route name
                    component: () => import("../moduls/landing/pages/PricesPage.vue"),
                },
                {
                    path: '/mentoring/:id',
                    name: 'Mentoring', //route name
                    props: true,
                    component: () => import('../moduls/mentoring/pages/MentoringPage.vue'),
                },
            ],
        },
        {
            path:"/auth",
            redirect:"/auth/login",
            name:"Login",
            component: () => import("../moduls/auth/layouts/AuthLayouts.vue"),
            children:[
                {
                    path:"/login",
                    name:"Login", //route name
                    component: () => import("../moduls/auth/pages/LoginPage.vue"),
                },
                {
                    path:"/register",
                    name:"Register", //route name
                    component: () => import("../moduls/auth/pages/RegisterPage.vue"),
                },
            ],
        },
        {
            path:"/:pathMatch(.*)*", //Regex 404
            name:"NotFound", //route name
            component: () => import("../moduls/common/pages/NotFoundPage.vue"),
        }
    ],
});

export default router;