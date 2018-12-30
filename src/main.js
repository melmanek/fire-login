import Vue from "vue"
import App from "./App.vue"
import "./plugins/vuetify"
import router from "./plugins/router"

Vue.config.productionTip = false
Vue.config.devtools = false

const vapp = new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
