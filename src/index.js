import blessed from 'blessed';
import terminal from './terminal/screen.js';
import { customer, cook, waiter } from './class.js';

const Terminal = new terminal();

const population = blessed.box({
	top: "top",
	right: "0",
	width: "10%",
	height: "10%",
	content: "",
	tags: true,
	border: {
		type: "line",
	},
	style: {
		fg: "white",
		bg: "magenta",
		border: {
			fg: "#f0f0f0",
		}
	},
});
Terminal.screen.append(population);

// console.log(population.getLines());




Terminal.render();