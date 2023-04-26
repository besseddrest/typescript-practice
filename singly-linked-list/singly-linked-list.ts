class ListNode<T> {
  value: T;
  next: ListNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  head: ListNode<T> | null;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  
  push(value: T): string {
    const newNode = new ListNode<T>(value);
    if(!this.head) {
      this.head = newNode;
      this.size++;
      return 'added head';
    }

    let current = this.head;
    while(current.next) {
      current = current.next; 
    }
    current.next = newNode;
    this.size++;

    return 'added node ' + newNode.value;
  }

  pop(): string {
    if (this.size == 0) {
      return 'no head';
    }

    let current = this.head;
    let prev = null;
    while(current.next) {
      current = current.next
      // peak into next to see if null
      if (!current.next) {
        prev = current;
      }
    }

    prev.next = null;
    this.size--;

    return 'removed node ' + current.value;
  }

  removeNode(value: T): string {
    let current = this.head;
    let prev = null;

    if (current.value === value) {
      this.head = current.next;
      this.size--;
      return 'removed head and replaced with ' + this.head.value;
    }
    
    while(current.next) {
      if (current.value != value) {
        prev = current;
        current = current.next;
      } else {
        console.log(value);
        prev.next = current.next;
        this.size--;
        break;
      }
    }

    return 'removed node with value: ' + value;
  }
}

const newList = new LinkedList<string>();
console.log(newList.push('foo'));
console.log(newList.push('bar'));
console.log(newList.push('hello'));
console.log(newList.push('world'));
console.log(newList.removeNode('foo'));
console.log(newList);
