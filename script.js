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
});

app.mount("#container");
