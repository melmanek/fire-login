<template>
  <v-container app fluid fill-height>
    <v-layout justify-center align-center>
      <v-card flat color="primary elevation-0">
        <v-system-bar status color="primary">
          <v-spacer></v-spacer>
          <v-toolbar-title class="text-uppercase">
            <span class="font-weight-black txt">log</span>
            <span class="font-weight-thin">-in</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
        </v-system-bar>
        <v-divider></v-divider>
        <v-card-text class="pt-0">
          <v-text-field
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
            v-model="password"
            :type="unhidden ? 'text' : 'password'"
            class="primary--text"
            color="white"
            required
          >
            <v-icon small slot="append" @click="unhidden = !unhidden;">
              {{ icon }}
            </v-icon>
          </v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn @click.prevent="submit" flat block small>Zaloguj</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import * as fb from "@/plugins/firebase";
export default {
  name: "Login",
  data: () => ({
    email: null,
    password: null,
    unhidden: false
  }),
  computed: {
    icon() {
      if (this.unhidden) {
        return "visibility";
      } else {
        return "visibility_off";
      }
    }
  },
  methods: {
    submit() {
      fb.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          console.log(err.message);
        });
    }
  }
};
</script>

<style scoped></style>
