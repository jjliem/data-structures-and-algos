class Queue {
	// Your code below!
	constructor() {
		this.items = [];
		this.size = 0;
	}

	enqueue(item) {
		this.size++;
		this.items.push(item);
	}

	dequeue() {
		this.size--;
		return this.items.shift();
	}
}

module.exports = Queue