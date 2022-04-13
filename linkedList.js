class ItemList {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    };

    _addFirstItem(value) {
        this.head =new ItemList(value);
        this.tail = this.head;
    };

    push(value) {
        if (!value) return;
        if (!this.head) {
            this._addFirstItem(value);
        } else {
            const item = new ItemList(value);
            const lastNode = this.tail
            lastNode.next = item;
            this.tail = lastNode.next;
        }
    };

    unshift(value) {
        if (!value) return;
        if (!this.head) {
            this._addFirstItem(value);
        } else {
            const item = new ItemList(value, this.head);
            this.head = item;
        }
    };

    find(fn) {
        if (!this.head) return;
        if (!fn || typeof fn !== 'function') return;
        let next = this.head;
        while(next) {
            if (fn(next.value)) return next;
            else next = next.next;
        }
        return null;
    };

    append(value, fn) {
        const node = this.find(fn)
        if (!node) return;
        if (!node.next) {
            this.push(value)
        } else {
            const nextNode = node.next;
            const item = new ItemList(value, nextNode);
            node.next = item;
        }
    };

    remove(fn) {
        if (!this.head) return;

        let prev = null;
        let current = this.head;

        while(current) {
            if (fn(current.value)) {
                if (!prev) {
                    this.head = current.next;
                } else if (!current.next) {
                    prev.next = null
                    this.tail = prev;
                } else {
                    prev.next = current.next;
                }
                return;
            } else {
                prev = current;
                current = current.next;
            }
        }
    };

    toArray() {
        let next = this.head;
        const results = [];
        while(next) {
            results.push(next.value);
            next = next.next
        };
        return results;
    }
}

const list = new LinkedList()
list.push(2)
list.push(3)
list.push(4)
list.push(6)
list.unshift(1)
list.append(5, (el) => el === 4)
list.append(7, (el) => el === 6)
list.remove((el) => el === 7)

console.log(list.find((el) => el === 5))
console.log(list.toArray())