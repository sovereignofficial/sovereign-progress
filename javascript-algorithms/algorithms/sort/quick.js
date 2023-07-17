const quickSort = (arr) =>{
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length - 1] ;
    let leftArr  = [];
    let rightArr = [];

    for(let item of arr){
        if(item > pivot){
            rightArr.push(item);
        }
        if(item < pivot){
            leftArr.push(item);
        }
    }

    return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
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
console.log(quickSort(newArr));