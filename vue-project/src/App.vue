<template>
    <button :class="classTitle" @click="increment">count is: {{ count }}</button>
    <input v-model="text" placeholder="Type here">
    <p>{{ text }}</p><br><br>
    <button @click="toggle">Zmen sa</button><br>
    <h1 v-if="mega">Vue je mega!!!!!!!!!!!!!!!!</h1>
    <h1 v-else>React je mega!!!!!!!!!!!!</h1>
    <br><br><br>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add Todo</button>
    </form><br>
    <ul>
        <li v-for="todo in clearedTodos" :key="todo.id">
            <input type="checkbox" v-model="todo.done">
            <span :class="{done: todo.done}">{{ todo.text }}</span>
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>
    <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Ukaz vsetky' : 'Schovaj hotove' }}
    </button>
</template>

<script>
let id = 0

export default {
    data() {
        return {
            count: parseInt(localStorage.getItem('count')) || 0,
            classTitle: 'title',
            text: '',
            mega: true,
            newTodo: '',
            hideCompleted: false,
            todos: [
                {id: id++, text: "Urobit si domacu ulohu s FE", done: true},
                {id: id++, text: "Vyniest smeti", done: true},
                {id: id++, text: "Dobre sa vyspat", done: false},
            ]
        }
    },
    computed: {
        clearedTodos() {
            return this.hideCompleted
            ? this.todos.filter((t) => !t.done)
            : this.todos
        }
    },
    methods: {
        increment() {
            this.count++
            localStorage.setItem('count', this.count)
        },
        toggle() {
            this.mega = !this.mega
        },
        addTodo() {
            if(this.newTodo.length === 0) {
                alert("Vkladas prazdny task")
            } else {
                this.todos.push({id: id++, text: this.newTodo, done: false})
                this.newTodo = ''
            }
        },
        removeTodo(todo) {
            this.todos = this.todos.filter((t) => t !== todo)
        }
    }
}
</script>


<style scoped>
.title {
    color: red;
}

.done {
    text-decoration: line-through;
}
</style>
