function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
    return arr;
  }

  const generateRandomArray = (digit) =>{
    const arr = [];
    for(let i = 0; i < digit; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
    
    return arr
}

const newArr = generateRandomArray(30);
console.log(newArr);
console.log(selectionSort(newArr));