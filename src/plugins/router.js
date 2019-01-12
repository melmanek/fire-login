import Vue from "vue";
import Router from "vue-router";
import store from "../plugins/store";
import Login from "@/components/Login";
import Dashboard from "@/components/Dashboard";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
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
      meta: { requiresAuth: true }
    }
  ]
});
router.beforeEach((to, from, next) => {
  const req = to.matched.some(e => e.meta.requiresAuth);
  const user = store.state.currentUser;

  if (req && !user) {
    next("/login");
  } else if (req && user) {
    next();
  } else {
    next();
  }
});
export default router;
