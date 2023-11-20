<template>
  <div class="about">
    <h1 @click="goToHome">This is an {{ text }} page</h1>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">

export default {
    props: {
       text: String
    },
    computed: {
        textFromRouter() {
            return this.$route.params.text
        }
    },
    methods: {
        goToHome() {
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
