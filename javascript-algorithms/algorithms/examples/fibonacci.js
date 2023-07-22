// https://leetcode.com/problems/fibonacci-number/

const n = 5;

const fib = (n) =>{
    let a=0, b = 1 , sum;
    if(n == 0 || n==1){
        return n;
    }
    while (n>1){
        sum = a + b;
        a=b
        b=sum;
        n--;
    }
    return sum;
}
console.log(fib(n));