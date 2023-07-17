const mergeSort = (arr) =>{
    if(arr.length < 2){
        return arr;
    }
    const midPoint = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, midPoint);
    const rightArr = arr.slice(midPoint);
    return merge(mergeSort(leftArr),mergeSort(rightArr));
}

const merge = (left,right) =>{
    const sortedArr = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArr.push(left.shift());
        }else{
            sortedArr.push(right.shift());
        }
    }
    return [...sortedArr,...left,...right];
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
console.log(mergeSort(newArr));