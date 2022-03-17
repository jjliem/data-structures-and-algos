class Node {
  // Your code here!
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  // Your code here!
  constructor(head = null) {
    this.head = head;
    this.tail = head;
  }

  addToTail(newNode) {
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail = newNode;
      this.tail.next = null;
    }
  }

  addToHead(newNode) {
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.head = newNode;
    this.head.previous = null;
    this.head.next = this.tail;
  }

  removeTail() {
    // if no tail, return null
    if (this.tail === null) {
      return null;
    }
    let lastTail = this.tail;
    this.tail = lastTail.previous;
    return lastTail;
  }
}

module.exports = {
  Node,
  LinkedList,
};
