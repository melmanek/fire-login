<template>
  <span>dashboard! {{ email }}</span>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({}),
  computed: {
    email() {
      return this.$store.getters.email;
    }
  }
};
</script>
