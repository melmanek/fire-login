import Vue from "vue";
import App from "./App.vue";
import { auth } from "./plugins/firebase";
import "./plugins/vuetify";
import { store } from "./plugins/store";
import router from "./plugins/router";
// const fb = require('.plugins/firebase.js')

Vue.config.productionTip = false;
Vue.config.devtools = false;

let vapp;
auth.onAuthStateChanged(user => {
  if (!vapp) {
    vapp = new Vue({
      router,
      store,
      render: h => h(App),
      created() {}
    }).$mount("#app");
  }
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) {
    next("/login");
  } else if (requiresAuth && currentUser) {
    next();
  } else {
    next();
  }
});
