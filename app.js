const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Coding Garding',
        newTodo: ''
    },
    methods: {
        addTodo() {
            console.log(this.newTodo)
        },
    },
})