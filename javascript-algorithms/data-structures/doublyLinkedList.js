class Node {
    constructor(data, next = null, previous = null) {
        this.data = data;
        this.next = next;
        this.previous = previous
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //insert first node
    insertFirst(data){
        if(!this.head){
            this.head = new Node(data,this.head)
        }else{
            let node = new Node(data,this.head);
            this.head.previous = node;
            //update head
            this.head = node;
        }
        this.size++;
    }

    // insert node at index 
    insertAt(data,index){
        if(index > this.size)return;
        if(index === 0)return this.insertFirst(data);

        let count = 0;
        let current = this.head;

        while(count < index){
            current = current.next;
            count++;
        }
        
        let node = new Node(data)
        current.previous.next = node;
        node.previous = current.previous;
        node.next = current;
        current.previous = node;
        this.size++;
    }
    // insert last node 
    insertLast(data){
        let current ;
        let node = new Node(data);

        if(!this.head)return this.head = node;
        
        current = this.head
        while(current.next){
            current = current.next;
        }
        current.next = node;
        node.previous = current;
        this.size++;
    }

    // remove node at index
    removeAt(index){
        if(index > this.size)return;

        let count = 0 , current = this.head;

        while(count < index){
            current = current.next;
            count++;
        }
        current.previous.next = current.next;
        this.size--;
    }

    // clear list 
    clearList(){
        this.head = null;
        this.size = 0;
    }

    // print list  
    printDLL(){
        let current= this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    } 
}

const dll = new DLL();

dll.insertFirst(123);
dll.insertFirst(45);
dll.insertFirst(23);

dll.insertAt(517,1);
dll.insertLast(199);
dll.removeAt(3);
dll.printDLL();
