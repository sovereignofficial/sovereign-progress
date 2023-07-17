const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let j = i - 1;
      let temp = arr[i];
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
    return arr;
  };
  
const generateRandomArray = (digit) =>{
    const arr = [];
    for(let i = 0; i < digit; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
    
    return arr
}

const newArr = generateRandomArray(30);
console.log(newArr);
console.log(insertionSort(newArr));