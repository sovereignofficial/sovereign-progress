class Node {
    constructor(data,left = null ,right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        let newNode = new Node(data);
        if(!this.root){
          return this.root = newNode;
        }
        
        let current = this.root;

        while(true){
            if(data < current.data){
                if(!current.left){
                    return current.left = newNode;
                }
                current = current.left;
            }else if (data > current.data){
                if(!current.right){
                    return current.right = newNode;
                }
                current = current.right;
            }else{
                return;
            }
        }
    }
    contains(data) {
        if (!this.root) {
          throw new Error("List is empty!");
        }
      
        let current = this.root;
      
        while (current) {
          if (data === current.data) {
            return true;
          } else if (data < current.data) {
            current = current.left;
          } else {
            current = current.right;
          }
        }
      
        return false;
      }
      // depth first search
      minData(){
          if(!this.root){
            throw new Error("List is empty!");
          }

          let current = this.root;

          while(current.left){
              current = current.left;
          }
          return current.data;
      }
      maxData(){
        if(!this.root){
          throw new Error("List is empty!");
        }

        let current = this.root;

        while(current.right){
            current = current.right;
        }
        return current.data;
    }
    // breadth first search
    bfs() {
      if (!this.root) {
        throw new Error("List is empty!");
      }
    
      let queue = [this.root];
      let bfsList = [];
    
      while (queue.length > 0) {
        let current = queue.shift();
        bfsList.push(current.data);
    
        if (current.left) {
          queue.push(current.left);
        }
    
        if (current.right) {
          queue.push(current.right);
        }
      }
    
      return bfsList;
    }

}

const bst = new BinarySearchTree();
bst.insert(59);
bst.insert(23);
bst.insert(95);
bst.insert(12);
bst.insert(45);
bst.insert(78);
bst.insert(82);
console.log(`max data is ${bst.maxData()}, min data is ${bst.minData()}`);
console.log(bst.contains(23), bst.contains(31), bst.contains(95),bst.contains(35));
console.log(bst.bfs());
