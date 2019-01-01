import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: "/",
  routes: [
    // {
    //   path: "*",
    //   component: () => import("./../components/Dashboard.vue")
    // },
    {
      path: "*",
      redirect: "/dashboard"
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
});
