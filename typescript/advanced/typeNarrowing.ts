// type narrowing

type Shape = {
    area:number;
}
type Square = {
    area:number;
}

const shape:unknown = undefined

if(typeof shape == "string"){
    console.log("OK")
}else{
    console.log("Not a string");
}

// type predicates

function CalculateArea(shape):shape is Square{
    return shape?.area ?? 0
}