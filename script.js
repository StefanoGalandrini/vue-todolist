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
			const trimmedText = this.newTodoText.trim();
			if (trimmedText.length < 5) {
				this.error = "Il testo deve essere lungo almeno 5 caratteri.";
				return;
			}
			this.todos.unshift({
				text: trimmedText,
				done: false,
			});
			this.newTodoText = "";
			this.error = "";
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
