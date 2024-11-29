import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import LoaderCss from "@/components/LoaderCss.vue";
import LoginPage from "@/components/LoginPage.vue";
import RegisterPage from "@/components/RegisterPage.vue";
import DashBoard from "@/components/DashBoard.vue";



const routes = [
    {path: "/", component: HelloWorld},
    {path: "/loader", component: LoaderCss},
    {path: "/login", component: LoginPage},
    {path: "/register", component: RegisterPage},
    {path: "/dashboard", component: DashBoard},






]



const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router; 