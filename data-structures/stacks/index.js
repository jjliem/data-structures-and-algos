class Stack{
	// Your code below!
	constructor(){
		this.items = [];
		this.size = 0;
	}

	push(item) {
		this.size++;
		this.items.push(item);
	}

	pop() {
		this.size--;
		return this.items.pop();
	}
}

module.exports = Stack