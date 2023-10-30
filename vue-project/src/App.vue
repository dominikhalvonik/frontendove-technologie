<template>
    <p><h1 :class="titleStyle">{{ message }}</h1></p><br>
    <p>Count is: {{ counter.count }}</p><br>
    <p><button @click="increment">Increment</button></p>
    <input v-model="text" placeholder="Type here"><br>
    <p>{{ text }}</p><br><br><br>

    <button @click="toggle">Ukaz</button>
    <h1 v-if="mega">Vue je super!!!!!!!!!!!</h1>
    <h1 v-else>React je super!!!!!!!!!!!!</h1>
    <br><br>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add todo</button>
    </form>
    <br>
    <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
            <input type="checkbox" v-model="todo.done">
            <span :class="{done: todo.done}">{{ todo.text }}</span>
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Ukaz vsetko' : 'Schovaj vsetko' }}
    </button>
</template>

<script>
let id = 0

export default {
    data() {
        return {
            message: 'Hello World!',
            counter: {
                count: parseInt(localStorage.getItem("counter")) || 0
            },
            titleStyle: 'title',
            text: '',
            mega: true,
            newTodo: '',
            todos: [
                {id: id++, text: 'Uprata izbu', done: true},
                {id: id++, text: 'Vyniest smeti', done: true},
                {id: id++, text: 'Ucit sa', done: false}
            ],
            hideCompleted: false,
        }
    },
    computed: {
        filteredTodos() {
            return this.hideCompleted
            ? this.todos.filter((t) => !t.done)
            :this.todos
        }
    },
    methods: {
        increment() {
            this.counter.count++
            localStorage.setItem("counter", this.counter.count)
        },
        toggle() {
            this.mega = !this.mega
        },
        addTodo() {
            this.todos.push({id: id++, text: this.newTodo, done: false})
            this.newTodo = ''
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((t) => t !== todo)
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