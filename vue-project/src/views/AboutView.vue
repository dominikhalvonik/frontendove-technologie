<template>
  <div class="about">
    <h1 @click="goToHomePage">This is an {{ message }} page</h1>
  </div>

    <router-view />
</template>

<script lang="ts">
export default {
    props: {
        message: String
    },
    computed: {
        routerText() {
            return this.$route.params.message
        }
    },
    methods: {
        goToHomePage() {
          this.$router.push("/")
        }
    }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
