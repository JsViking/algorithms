class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class Queue {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    
    enqueue(item) {
        if (!this.head) {
            this.head = new Node(item)
            this.tail = this.head
        } else {
            const node = this.tail
            this.tail = new Node(item)
            node.next = this.tail
        }
        this.length++
    }
  
    dequeue() {
        if (!this.head) return
        const value = this.head
        this.head = this.head.next
        this.length--
        return value
    }
  
    get size() {
        return this.length
    }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
console.log(queue.size)
const value = queue.dequeue()
console.log(value)
console.log(queue.size)