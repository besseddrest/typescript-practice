class ExListNode<T> {
	value: T;
	next: null;
	constructor(value: T) {
		this.value = value;
			this.next = null;
	}
}

class ExLinkedList<T> {
	head: ExListNode<T> | null;
	size: number;
	constructor() {
		this.head = null;
			this.size = 0;
	}

	push(value: T): boolean {
		const newNode = new ExListNode<T>(value);
		if(!this.head) {
				this.head = newNode;
		}

		// if there are already nodes present
		let current =  this.head;
		while(current.next) {
				current = current.next;
		}
		current.next = newNode;
		this.size++;
		// you can choose to return anything
		// I will return a boolean to indicate success
		return true;
	}
}