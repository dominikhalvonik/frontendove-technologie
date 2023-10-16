<template>
    <button :class="classTitle" @click="increment">count is: {{ count }}</button>
    <input v-model="text" placeholder="Type here">
    <p>{{ text }}</p>
</template>

<script>
export default {
    data() {
        return {
            count: parseInt(localStorage.getItem('count')) || 0,
            classTitle: 'title',
            text: ''
        }
    },
    methods: {
        increment() {
            this.count++
            localStorage.setItem('count', this.count)
        }
    }
}
</script>


<style scoped>
.title {
    color: red;
}
</style>
