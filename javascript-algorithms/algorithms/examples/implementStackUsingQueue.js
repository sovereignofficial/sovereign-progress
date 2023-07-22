// https://leetcode.com/problems/implement-stack-using-queues/solutions/3407379/one-queue-approach-with-queue-implementation-in-javascript/

class myQueue{
    constructor(){
        this.items = [];
    }
    enqueue(x) {    
        this.items.push(x)
    }

    dequeue() {
        return this.items.shift()
    }

    peek() {
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    size() {
        return this.items.length
    }
}

class myStack{
    constructor(){
        this.queue = new myQueue();
    }
    push(x) {
        this.queue.enqueue(x)

        let size = this.queue.size()
        while(size > 1) {
            this.queue.enqueue(this.queue.dequeue())
            size--
        }
    }

    pop() {
        return this.queue.dequeue()
    }

    top() {
        return this.queue.peek()
    }

    empty() {
        return this.queue.isEmpty()
    }
}