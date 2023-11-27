<template>
    <div class="greetings">
        <h1 class="green">{{ msg }}</h1>
        <h3>
            You’ve successfully created a project with
            <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
            <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
        </h3><br>
        <p>Počet kliknutí: {{ count }}</p>
    </div>
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
        msg: String
    },
    computed: {
        // Vypočítaná vlastnosť pre získanie aktuálneho počtu
        count() {
            return this.counterStore.count;
        },
    },
}
</script>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
