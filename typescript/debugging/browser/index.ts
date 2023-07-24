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

