import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/views/MainPage";
import secondPage from "@/views/SecondPage";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component:MainPage,

        },
        {
            path: '/second',
            component:secondPage,
       
        },
    ]
})
export default router