import Vue from "vue";
import App from "./App.vue";
import * as fb from "./plugins/firebase";
import "./plugins/vuetify";
import store from "./plugins/store";
import router from "./plugins/router";
// const fb = require('.plugins/firebase.js')

Vue.config.productionTip = false;
Vue.config.devtools = false;

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    fb.auth.onAuthStateChanged(user => {
      store.dispatch("login", user);
      console.log();
      router.push("/dashboard");
    });
  }
}).$mount("#app");
