<template>
  <div id="app">
    <v-app dark class="primary">
      <v-navigation-drawer app v-model="drawer"> </v-navigation-drawer>
      <v-toolbar app flat fixed class="transparent">
        <v-spacer></v-spacer>
        <v-toolbar-title class="text-uppercase text-xs-center">
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-content>
        <transition>
          <keep-alive> <router-view></router-view></keep-alive>
        </transition>
      </v-content>
      <v-footer app> </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    drawer: false
  })
}
</script>

<style lang="stylus">

.va-m {
  vertical-align: middle !important;
}
label {
  opacity: 0.3;
}
input {
  text-align: center !important;
}
</style>
