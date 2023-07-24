interface Course {
    title:string;
    price:number;
    user:User;
}

type User = {
    name:string,
    age:number,
    username:string
}
type OnCourseCreated = (user:User,course:Course) => Course; 


const voidFunc:Function = () =>{
    console.log("Hello World!");
}

const checkMyType = voidFunc();



const onCreated:OnCourseCreated = (user:User,course:Course)=>{
     course.user = user;
     return course
}

const createCourse = (title:string,price = 0, callback:Function) :Course =>{
    
    const newCourse = {
        title,
        price
    }
    const user = {
        name:"johndoe",
        age:21,
        username:"john1234"
    }
    return callback(user,newCourse)
} 

const checkMyType2 = createCourse("TypeScript Bootcamp",69.00,onCreated)

console.log(checkMyType2);