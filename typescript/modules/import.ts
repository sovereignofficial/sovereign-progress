import { PAGE_SIZE, Course , User } from "./export";

const getSize = PAGE_SIZE;

export const myCourse: Course = {
    title:"My Course",
    price:49.99,
    curriculum:{
        video1:"address1.mp3",
    }
}
export const myUser:User ={
    name:"John Doe",
    age:12,
    username:"sovereign",
    password:"sovereign123",
}
console.log(getSize);