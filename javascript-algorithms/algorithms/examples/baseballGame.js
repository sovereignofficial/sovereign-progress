// https://leetcode.com/problems/baseball-game//

const operations = ["5","-2","4","C","D","9","+","+"];

const calculateRecord = (operations) => {
    let scores = [];

    for(let i = 0; i < operations.length; i++){
        if(operations[i] === "C"){
            scores.pop();
        }else if(operations[i] === "D"){
            scores.push(scores[scores.length -1] * 2);
        }else if(operations[i] === "+"){
            scores.push(scores[scores.length -1] + scores[scores.length -2]);
        }else{
            scores.push(parseInt(operations[i]))
        }
    }
    
    return scores.reduce((acc,curr)=>{
        return acc + curr;
    },0)
}
console.log(calculateRecord(operations));