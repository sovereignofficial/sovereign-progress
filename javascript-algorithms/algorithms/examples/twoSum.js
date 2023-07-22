// https://leetcode.com/problems/two-sum/

let nums = [0,4,3,0], target = 0;

class HashMap { 
     constructor(){
        this.map = new Map();
     }
     has(data){
        return this.map.has(data);
     }
     assign(data,target){
        this.map.set(target - data,  data);
     }
     control(num,target){
         if(num + this.map.get(num) === target){
            return this.map.get(num);
         }
         return null
     }
}

const twoSum = (nums,target) =>{
    let hash = new HashMap();
    let twoSum;
    for(let i = 0; i < nums.length; i++){
        if(!hash.has(nums[i],target)){
            hash.assign(nums[i],target);
        }
        //check that it's completing the target with the remainder of an hash
       let control = hash.control(nums[i],target);
        if(control !== null ){
            if(nums.indexOf(control) === i){
                continue;
            }
           twoSum = [nums.indexOf(control), i];
           break;
        }
    }
   return twoSum;
}

console.log(twoSum(nums,target));