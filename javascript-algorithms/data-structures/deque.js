class Deque{
    constructor(){
        this.deque = [];
    }
    addFirst(data){
        this.deque.unshift(data);
    }
    addLast(data){
        this.deque.push(data);
    }
    removeFirst(){
        this.deque.shift();
    }
    removeLast(){
        this.deque.pop()

    }
    getFirst(){
        return this.deque[0]
    }
    getLast(){
        return this.deque[this.deque.length - 1]
    }
    isEmpty(){
        return this.deque.length < 1
    }
    printDeque(){
        console.log(this.deque);
    }
}

const deq = new Deque();
deq.addFirst(56)
deq.addFirst(526)
deq.addFirst(987)
deq.addLast(345)
deq.addLast(231)
deq.addLast(561)
console.log(
    deq.getFirst(),
    deq.getLast(),
    deq.isEmpty()
)
deq.removeFirst();
deq.removeLast();
deq.printDeque();