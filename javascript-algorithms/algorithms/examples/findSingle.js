// https://leetcode.com/problems/single-number/

const nums = [1,1,2,2,4,6,7,5,5,7,6];

const singleNumber = (nums) =>{
    //edge case
    if(!nums.length > 1){
        return nums[0];
    }
    let result = 0;
    for(let num of nums){
      result = num ^ result;
    }
    return result;
}   

console.log(singleNumber(nums));