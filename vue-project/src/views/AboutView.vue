<template>
  <div class="about">
    <h1 @click="goToHome">This is an {{ text }} page</h1><br>
    <button @click="increment">Klikni ma</button><br>
    <p>Počet kliknutí: {{ count }}</p>
    <p>Result: {{ info }}</p>
    <p>Result 2: {{ info2 }}</p>
  </div>

  <router-view></router-view>
</template>

<script lang="ts">

import {useCounterOptionsStore} from "@/stores/counter-options";
import axios from "axios";
import api from "@/axios/axios-instance";

export default {
    data() {
        const counterStore = useCounterOptionsStore();

        return {
            // Vráti priamo reaktívnu referenciu na počet
            counterStore,
            info: "",
            info2: "",
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
    created() {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => {
                this.info = response.data;
            }).catch(function (error) {
                console.log(error)
            })

        /*api.get("todos/2")
            .then(response => {
                this.info2 = response.data;
            }).catch(function (error) {
            console.log(error)
        })*/

        const data = {
            email: "fsdfdsafdsaffdsfdsafdsfsdafdsa@gmail.com",
            password: "123456789aA",
            game_token: "QhsSExGkWtNZT8nA5DymX0riBgaq1YFof4IKbCpJdjPLR3czM7Vu2e69wlHvUO",
            language: "sk",
            last_id_group: null,
            id_group: null
        }
        api.post("oauth/register", data)
            .then(response => {
                this.info2 = response.data;
            }).catch(function (error) {
            console.log(error)
        })
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
