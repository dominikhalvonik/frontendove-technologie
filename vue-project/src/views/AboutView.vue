<template>
  <div class="about">
    <h1 @click="goToHome">This is an {{ text }} page</h1><br>
    <button @click="increment">Klikni ma</button><br>
    <p>Počet kliknutí: {{ count }}</p>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">

import {useCounterOptionsStore} from "@/stores/counter-options";

export default {
    data() {
        const counterStore = useCounterOptionsStore();

        return {
            // Vráti priamo reaktívnu referenciu na počet
            counterStore,
        };
    },
    props: {
       text: String
    },
    computed: {
        textFromRouter() {
            return this.$route.params.text
        },
        // Vypočítaná vlastnosť pre získanie aktuálneho počtu
        count() {
            return this.counterStore.count;
        },
    },
    methods: {
        goToHome() {
            this.$router.push("/")
        },
        increment() {
            this.counterStore.increment();
        },
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
