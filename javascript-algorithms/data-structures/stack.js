class Stack{
    constructor(){
        this.stack = [];
    }
    push(data){
        this.stack.push(data);
    }
    pop(){
        this.stack.pop();
    }
    top(){
        return this.stack[this.stack.length -1];
    }
    base(){
        return this.stack[0];
    }
    isEmpty(){
        return this.stack.length == 0;
    }
    printStack(){
        console.log(this.stack);
    }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(11);
myStack.push(16);
myStack.push(123);
console.log(myStack.top(),myStack.base(),`isempty? ${myStack.isEmpty()}`);
myStack.pop();
myStack.printStack();