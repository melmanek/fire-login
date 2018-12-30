import Vue from "vue"
import Vuetify from "vuetify"
import "vuetify/dist/vuetify.min.css"
import pl from "vuetify/es5/locale/pl"

Vue.use(Vuetify, {
  theme: {
    primary: "#1b1b1b",
    secondary: "#b0bec5",
    accent: "#8c9eff",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  iconfont: "md",
  lang: {
    locales: { pl },
    current: "pl"
  }
})
