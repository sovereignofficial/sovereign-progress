// https://leetcode.com/problems/contains-duplicate/

const nums = [1,2,3,5,2,4,6,2];

let findDuplicated = (nums) =>{
    const hashSet = new Set();
    for(let num of nums){
        hashSet.add(num);
    }
    return hashSet.size !== nums.length;
}

console.log(findDuplicated([0]));
