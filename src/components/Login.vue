<template>
  <v-container app fluid fill-height>
    <v-layout justify-center align-center>
      <v-card ref="form" flat color="primary elevation-0">
        <v-system-bar status color="primary">
          <v-spacer></v-spacer>
          <v-toolbar-title class="text-uppercase">
            <span class="font-weight-black txt">login</span>
            <span class="font-weight-thin">form</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-system-bar>
        <v-divider></v-divider>
        <v-card-text class="pt-0">
          <v-text-field
            ref="email"
            v-model="email"
            type="email"
            label="email"
            class="primary--text"
            color="white"
            required
          >
          </v-text-field>
          <v-text-field
            label="password"
            ref="password"
            v-model="password"
            type="password"
            class="primary--text"
            color="white"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click="submit" flat block small>Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    email: null,
    password: null,
    repeat: null
  }),
  methods: {
    submit() {
      console.log(this.email);
    }
  }
};
</script>

<style scoped>
.txt {
  color: var(--v-secondary-base) !important;
}
</style>
