let unknownType:unknown;

unknownType="sadasd";
unknownType=true;
unknownType=false;
unknownType={};
unknownType=undefined;
unknownType=null;

let anyType:any = undefined;


let value:boolean = anyType;
let value1:boolean = unknownType;

// So difference betweem any and unknown is the compiler can't throw an error while we using the any type.
// The where you use any type , you should use unknown type. Escape using any type in typescript.


