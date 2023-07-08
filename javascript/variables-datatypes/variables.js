'use strict'

// Scopes

//Global
 var ImmaGlobal = "im in global scope,you can modify me in every scope";

//Function
 function newFunction(){
     var ImmaFunctionScope="im in the function scope, you cant change me at the outside of this scope";
     console.log("function scope:",ImmaFunctionScope);
 }
 newFunction();

//Block
 if(ImmaGlobal){
    var immaDangerous = 35;
    let blockScope = "here is the block scope";
    console.log("block scope:",blockScope)//output:here is the block scope;
    blockScope = "foo"
    console.log("let can be changed from later",blockScope)//output:foo;

    console.log("var is dangerous:",immaDangerous);//output:35

    const immutableOne = "you cant change me even in the same scope";
    console.log("const is immutable",immutableOne)//output:you cant change me even in the same scope;

    immutableOne= "change"
    console.log("const is immutable",immutableOne)//output:Uncaught TypeError: Assignment to constant variable.;
 }
   immaDangerous = "Izmir"
   console.log("var is dangerous", immaDangerous);//output:Izmir

 for(let prop in ImmaGlobal){
    let blockScope = "you can give same names to variables within different scopes";
    console.log("local scope 2:",blockScope);
 }
