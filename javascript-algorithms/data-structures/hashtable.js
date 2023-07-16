class HashTable {
    constructor(size = 50) { 
      this.buckets = new Array(size); 
      this.size = size;
    }
  
    hash(key) {
      return key.toString().length % this.size;
    }
  
    set(key, value) {
      let index = this.hash(key);
      if (!this.buckets[index]) { 
        this.buckets[index] = []; 
      }
      this.buckets[index].push([key, value]);
      return index;
    }
  
    get(key) {
      let index = this.hash(key);
      let bucket = this.buckets[index];
      if (bucket) {
        for(let [k, v] of bucket) {
          if(k === key) {
            return v;
          }
        }
      }
    }
  }


  const hash = new HashTable();
  hash.set(12,12);
  hash.set(13,13);
  hash.set(323,323);
  const myVal = hash.get(13);
  console.log("my val",myVal);
