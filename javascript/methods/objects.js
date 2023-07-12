let user = {
    name:"Joe",
}

//manipulate an object
console.log(Object.assign(user,{name:"Jane",age:12}))//{ name: 'Jane', age: 12 }
console.log(user);//{ name: 'Jane', age: 12 }

//use an object as source and create another object by taking advantage of it
let newUser = {
    ...user,
    ...{name:"John",age:123}
}
console.log(Object.assign({},newUser,{age:32}))//{ name: 'John', age: 32 }
console.log(newUser)//{ name: 'John', age: 123 }



//get object as array or array as object
const phone = {
    brand:"Samsung",
    model:"Galaxy S21"
}

const phoneAsArray = Object.entries(phone);
console.log(phoneAsArray);//[ [ 'brand', 'Samsung' ], [ 'model', 'Galaxy S21' ] ]

const phoneAsObject = Object.fromEntries(phoneAsArray);
console.log(phoneAsObject);//[ [ 'brand', 'Samsung' ], [ 'model', 'Galaxy S21' ] ]

//freeze and protect
Object.freeze(phone);
phone.price = 2000;
delete phone.brand
console.log(phone)//{ brand: 'Samsung', model: 'Galaxy S21' }
