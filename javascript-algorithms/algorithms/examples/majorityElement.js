// https://leetcode.com/problems/majority-element/

const nums = [2, 2, 1, 1, 1, 2, 2];

const findMajor = (nums) => {
    //boyer moore algorithm
    let result = 0;
    let count = 0;

    for (let num of nums) {
        num === result
            ? count++
            : count > 0 ? count--
                : result = num;
    }
    return result;
}
cod
console.log(findMajor(nums))