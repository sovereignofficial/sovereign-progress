const linearSearch = (target,arr) =>{
    for(let item of arr){
        if(item !== target){
            continue;
        }
        return item;
    }
    throw new Error("Not found!");
}

const newArr = [1,2,3,5,6,7,8,9,10]

const target = 3;

const result = linearSearch(target,newArr);
console.log(result);