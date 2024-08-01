import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: '/',
        name: "PhotoCards",
        component: () =>  import("../pages/PhotoCards.vue")
    },
    {
        path: '/indie-game',
        name: "IndieGame",
        component: () =>  import("../pages/IndieGame.vue")
    },
    {
        path: '/entry-game',
        name: "EntryGame",
        component: () =>  import("../pages/EntryGame.vue")
    },
    {
        path: '/community',
        name: "Community",
        component: () =>  import("../pages/Community.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;