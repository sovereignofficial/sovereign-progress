const err = new Error("Something bad happened!");


try {
    // Code that might throw an error
  } catch (err) {
    // Handle the error
    console.error(err.message);
  } finally {
    // This code runs regardless of whether an error occurred
  }
  

  function doSomethingErrorProne() {
    if (ourCodeMakesAMistake()) {
      throw new Error("Custom error message");
    } else {
      doSomethingToGetAJavaScriptError();
    }
  }

  
  // With Promises
doSomethingAsync()
.then(result => console.log(result))
.catch(err => console.error(err));

// With async/await
async function doSomething() {
try {
  const result = await doSomethingAsync();
  console.log(result);
} catch (err) {
  console.error(err);
}
}
