class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    // Start at the head
    let currNode = this.head;
    // If list is empty
    if (!this.head) {
      return null;
    }
    // Check for item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list
            and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Item Found
    return currNode;
  }

  remove(item) {
    // If list empty
    if (!this.head) {
      return null;
    }

    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous note
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log("Item not found");
      return;
    }

    previousNode.next = currNode.next;
  }
}

function main() {
  let SLL = new LinkedList();
    SSL.insertFirst('Apollo');
    SSL.insertFirst('Boomer');
    SSL.insertFirst('Helo');
    SSL.insertFirst('Husker');
    SSL.insertFirst('Starbuck');

    SSl.insertFirst('Tauhida')
}

main();