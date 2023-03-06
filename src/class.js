export class customer {
	constructor(order) {
		this.order = order;
	}
}
export class cook {
	constructor(orders) {
		this.orders = orders;
	}
}
export class waiter {
	constructor(orders, table) {
		this.orders = orders;
	}
}