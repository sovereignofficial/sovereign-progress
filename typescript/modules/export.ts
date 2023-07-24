export const PAGE_SIZE = 100;

export interface Course {
    title:string;
    price:number;
    curriculum:{}
}

export type User = {
    name:string;
    age:number;
    username:string;
    password:string;
}