// https://leetcode.com/problems/daily-temperatures/

const temperatures = [73,74,75,71,69,72,76,73]
// Output: [1,1,4,2,1,1,0,0]


const top = function(a) {
    return a[a.length - 1];
}

const calculateDays = function(temperatures) {
    let stack = [], ans = Array(temperatures.length).fill(0);

    for(let i = 0; i < temperatures.length; i++) {
        while(stack.length && temperatures[top(stack)] < temperatures[i]) {
            let index = stack.pop();
            console.log(index);
            ans[index] = i - index;
        }
        stack.push(i);
    }

    return ans;
};