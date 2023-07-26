const genericExample = new Array<string>();

const promise = new Promise<number>((resolve,reject)=>{

})

//when you use this interface, you have to assign every property as mandatory, however, when we use Partial type it claims beign optional.
interface UserMandatory{
    id:string;
    name:string;
    age:number;
    password:string;
}

const updateUser = (userId:string,update:Partial<UserMandatory>)=>{};

updateUser("asdasd123",{
    name:"asd"
})
updateUser("123asdxxz12",{
    password:"alkfdal;ksdfjaslk;d12"
})

// Readonly claims entire properties of interface that you assigned by generic are readonly
const userFreezer = (user:UserMandatory): Readonly<UserMandatory> =>{
    return Object.freeze(user);
}

// generic functions 
interface Course {
    title:string,
    subtitle:string,
    price:number
}

// extends object type claims the input cant be a primitive
function freezeApp<Z extends object>(input:Z):Readonly<Z>{
    return Object.freeze(input);
}

const user:UserMandatory ={
    id:"123",
    name:"sadds",
    age:12,
    password:"asdsadasd"
}
const course:Course ={
    title:"sadsad",
    subtitle:"sadsadas",
    price:123
}
//freeze course
freezeApp(user);
//freeze user
freezeApp(course);

//keyof operator
type UserKeys = keyof UserMandatory;
// = "id" | "name" | "age" | "password"

function extractProperty<Z extends object,K extends keyof Z>(data:Z,key:K){
    return data[key]
}

extractProperty(user,"name");
