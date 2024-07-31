import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: '/',
        name: "PhotoCard",
        component: () =>  import("../pages/PhotoCard.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;