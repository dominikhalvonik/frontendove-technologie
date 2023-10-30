<template>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Ziskaj novy todo</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
</template>

<script>

export default {
    data() {
        return {
            todoId: 1,
            todoData: null
        }
    },
    methods: {
        async fetchData() {
            this.todoData = null
            //AJAX - Asynchronous Javascript and XML
            //AJAJ - Asynchronous Javascript and JSON
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`)
            this.todoData = await res.json()
        }
    },
    mounted() {
        this.fetchData()
    },
    watch: {
        todoId() {
            this.fetchData()
        }
    }
}
</script>

<style>
.title {
    color: red;
}

.done {
    text-decoration: line-through;
}
</style>