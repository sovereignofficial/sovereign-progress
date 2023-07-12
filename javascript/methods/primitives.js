//string primitives
let hello = "Hello";
console.log(hello.length)//5
console.log(hello.indexOf("l"))//2
console.log(hello.indexOf("z"))//-1
console.log(hello.lastIndexOf("l"))//3
console.log(hello[4])//o
console.log(hello.startsWith("h"))//false
console.log(hello.endsWith("o"))//true
console.log(hello.includes("el"))//true
console.log(hello.slice(3,5))//lo (doesn't include the last index that given,however, includes initial index point)
console.log(hello.slice(-4,-1))//ell (doesn't include the first index that given)
console.log(hello.substring(2,5))//llo (doesn't include the last index that given and you cant type negative index here)


let toReplace = "My name is Joe";
console.log(toReplace.replace("Joe","John"))//My name is John
console.log(toReplace.match(/[A-Z]/g))// ['M','J']
console.log(toReplace.split(" "))//[ 'My', 'name', 'is', 'Joe' ]
console.log(toReplace.repeat(2))//My name is JoeMy name is Joe
console.log(toReplace.concat("Nice to meet you!"))//My name is JoeNice to meet you!
console.log(toReplace.toUpperCase())//MY NAME IS JOE
console.log(toReplace.toLowerCase())//my name is joe
console.log(toReplace.trim())//My name is Joe - there is no whitespace 
console.log(toReplace.padStart(50,"."))//....................................My name is Joe
console.log(toReplace.padEnd(50,"."))//My name is Joe....................................

//string objects
let helloObject = new String("Helo")
console.log(helloObject)


//toFixed 
let PI = 3.14159265359
let num = PI.toFixed(4);
console.log(num);//3.1416

//toPrecision
num = PI.toPrecision(3);
console.log(num);//3.14

//toExponential
let mill = 1000000;
num = mill.toExponential();
console.log(num);//1e+6