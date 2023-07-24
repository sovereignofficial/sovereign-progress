interface Course {
    title:string;
    price:number;
}

const createCourse = (title:string,price = 0) =>{
    debugger;
    const newCourse: Course = {
        title,
        price
    }
    return newCourse
}

console.log(createCourse("TypeScript Bootcamp",23.99));
console.log(createCourse("TypeScript Bootcamp2"));

// node --inspect-brk index.js
// click F5

// why do we create a source map?
// In TypeScript, source maps are used to debug TypeScript code. 
// When you compile TypeScript code, it is transformed into JavaScript.
// The source map file allows you to debug the original TypeScript code, even though you are running the JavaScript code in the browser.