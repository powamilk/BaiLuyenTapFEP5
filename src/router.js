import { createRouter, createWebHistory } from "vue-router";
import List from "@/components/ListMovie.vue";
import Add from "@/views/AddMovie.vue";
import Update from "@/views/UpdateMovie.vue";
import Detail from "@/views/DetailMovie.vue";

const routes = [
    {path: '/', components: List},
    {path: '/add', components: Add},
    {path: '/update/:id', components: Update},
    {path: '/detail/:id', components: Detail}
]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router;