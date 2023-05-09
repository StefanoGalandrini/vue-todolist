const app = Vue.createApp({
	data() {
		return {
			newTodoText: "",
			error: "",
			todos: [
				{
					text: "Elemento 1",
					done: true,
				},
				{
					text: "Elemento 2",
					done: false,
				},
				{
					text: "Elemento 3",
					done: false,
				},
			],
		};
	},

	methods: {
		addTodo() {
			console.log("sono qui");
		},
		toggleBarred(i) {
			this.todos[i].done = !this.todos[i].done;
		},
		removeTodo(i) {
			this.todos.splice(i, 1);
		},
	},
});

app.mount("#container");
