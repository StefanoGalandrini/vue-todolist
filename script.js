const app = Vue.createApp({
	data() {
		return {
			todos: [
				{
					text: "Elemento 1",
					done: false,
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
