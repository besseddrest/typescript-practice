var ExListNode = /** @class */ (function () {
    function ExListNode(value) {
        this.value = value;
        this.next = null;
    }
    return ExListNode;
}());
var ExLinkedList = /** @class */ (function () {
    function ExLinkedList() {
        this.head = null;
        this.size = 0;
    }
    ExLinkedList.prototype.push = function (value) {
        var newNode = new ExListNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        // if there are already nodes present
        var current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;
        // you can choose to return anything
        // I will return a boolean to indicate success
        return true;
    };
    return ExLinkedList;
}());
