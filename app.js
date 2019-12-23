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
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            // 一番最後の値を取り除く
            this.todos.splice(todoIndex, 1)
        }
    },
})