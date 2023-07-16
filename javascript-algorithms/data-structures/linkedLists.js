class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Insert first node 
    insertFirst(data){
       this.head = new Node(data,this.head);
       this.size++
    }

    // Insert node to an index 
    insertAtIndex(data,index){
        if(index > 0 && index > this.size){
            return;
        }

        //if first index
        if(index === 0){
            this.insertFirst(data);
            return;
        }
        
        const node = new Node(data);

        //set current to
        let current,previous;
        current = this.head;
        let count = 0;
        while(count < index){
            previous = current;//node before index
            count++;
            current = current.next;
        }
        node.next  = current;
        previous.next = node;
        this.size++;
    }

    // Insert last node 
    insertLast(data){
        let node = new Node(data);
        let current;

        //if empty then make head
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;

            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++
    }

    // Get from an index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count === index){
                console.log(current.data)
            }
            count++
            current = current.next;
        }

        return null;
    }

    // Remove at index
    removeAt(index){
        if(index > 0 && index > this.size)return;

        let current = this.head;
        let previous ;
        let count = 0;

        if(index ===0){
            this.head = current.next;
        }else{
             while(count < index){
                count++;
                previous = current;
                current = current.next;
             }
             previous.next = current.next;
        }
        this.size--;
    }

    // Clear list 
    clearList(){
        this.head=null;
        this.size = 0;
    }

    // Print list data
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}


const linkedList = new LinkedList();


linkedList.insertFirst(123);
linkedList.insertFirst(93);
linkedList.insertFirst(53);
linkedList.insertLast(46554);
linkedList.insertAtIndex(31,2);
linkedList.removeAt(4);
linkedList.printListData();
