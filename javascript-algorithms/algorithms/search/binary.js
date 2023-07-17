const binarySearch = (target, arr) => {
    let firstIndex = 0;
    let lastIndex = arr.length - 1;

    while(firstIndex <= lastIndex) {
        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

        if(arr[middleIndex] === target){
            return arr[middleIndex];
        } else if(arr[middleIndex] > target){
            lastIndex = middleIndex - 1;
        } else {
            firstIndex = middleIndex + 1;
        }
    }

    return -1; // target not found
}

const generateRandomArray = (digit) =>{
    const arr = [];
    for(let i = 0; i < digit; i++){
        arr.push(Math.floor(Math.random() * 100));
    }

    return arr.sort((a,b)=>{
        return a-b;
    });
}

const newArr = generateRandomArray(30);
const target = 33;
console.log("generated array is",newArr);

const result = binarySearch(target,newArr);
console.log(result);
