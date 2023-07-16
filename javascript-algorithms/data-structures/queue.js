class Queue {
    constructor() {
        this.items = [];
    }

    // enqueue function
    enqueue(item) {
        // pushing element into the items
        this.items.push(item);
    }

    // dequeue function
    dequeue() {
        // if queue is empty
        // return "Underflow"
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

    // isEmpty function
    isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0;
    }

    // front function
    front() {
        // returns the Front element
        // returns "No elements in Queue" if Queue is empty
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

    // rear function
    rear() {
        // returns the last element of Queue
        // returns "No elements in Queue" if Queue is empty
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[this.items.length - 1];
    }

    // size function
    size() {
       return this.items.length;
    }
    printQueue(){
        console.log(this.items);
    }
}

let q = new Queue();
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue()
const front = q.front();
const rear = q.rear();
console.log(front,rear);
q.printQueue();

