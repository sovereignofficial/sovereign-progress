let neverVal:never;
// you cant assign any value and you can't do anything with it.

// a concrete example
const unexpectedError = (value:never)=>{
    console.log(`Unexpected Error : ${value}`)
}
type Status  = "draft" | "published";

let courseStatus:Status = "draft";

if(courseStatus == "draft"){

}
else if(courseStatus == "published"){

}
else{
    // ts compiler automatically infer the value type as never because the our status type only can take two value.
    const checkValueType = courseStatus;
    unexpectedError(checkValueType);
}

