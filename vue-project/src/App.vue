<template>
    <p><h1 :class="titleStyle">{{ message }}</h1></p><br>
    <p>Count is: {{ counter.count }}</p><br>
    <p><button @click="increment">Increment</button></p>
    <input v-model="text" placeholder="Type here"><br>
    <p>{{ text }}</p><br>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello World!',
            counter: {
                count: parseInt(localStorage.getItem("counter")) || 0
            },
            titleStyle: 'title',
            text: ''
        }
    },
    methods: {
        increment() {
            this.counter.count++
            localStorage.setItem("counter", this.counter.count)
        }
    }
}
</script>

<style>
.title {
    color: red;
}
</style>