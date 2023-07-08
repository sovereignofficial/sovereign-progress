//garbage collector example
let x = {
    a: {
      b: 2,
    },
  };
  
  let y = x;
  
  x = 1;
  
  let z = y.a;
  
  y = "mozilla";
  
  z = null;
