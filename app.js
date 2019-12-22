const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Coding Garding',
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                done: false
            })
            this.newTodo = '';
        },
    },
})