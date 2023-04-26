var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.size = 0;
    }
    LinkedList.prototype.push = function (value) {
        var newNode = new ListNode(value);
        if (!this.head) {
            this.head = newNode;
            this.size++;
            return 'added head';
        }
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;
        return 'added node ' + newNode.value;
    };
    LinkedList.prototype.pop = function () {
        if (this.size == 0) {
            return 'no head';
        }
        var current = this.head;
        var prev = null;
        while (current.next) {
            current = current.next;
            // peak into next to see if null
            if (!current.next) {
                prev = current;
            }
        }
        prev.next = null;
        this.size--;
        return 'removed node ' + current.value;
    };
    LinkedList.prototype.removeNode = function (value) {
        var current = this.head;
        var prev = null;
        if (current.value === value) {
            this.head = current.next;
            this.size--;
            return 'removed head and replaced with ' + this.head.value;
        }
        while (current.next) {
            if (current.value != value) {
                prev = current;
                current = current.next;
            }
            else {
                console.log(value);
                prev.next = current.next;
                this.size--;
                break;
            }
        }
        return 'removed node with value: ' + value;
    };
    return LinkedList;
}());
var newList = new LinkedList();
console.log(newList.push('foo'));
console.log(newList.push('bar'));
console.log(newList.push('hello'));
console.log(newList.push('world'));
console.log(newList.removeNode('foo'));
console.log(newList);
