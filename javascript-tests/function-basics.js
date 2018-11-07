window.onload = () => {
   
    
    const functionCalls = document.getElementById("function-calls");
    

    functionCalls.onclick = () => {
       simpleFunction();
       functionParameters("Many functions take parameters.");
       functionReturn();
       const returnValue = functionReturn();
       console.log(returnValue);
    }

}

function simpleFunction() {
    const displayText = "Functions should consist of statements designed to perform a single task.";
    const simpleFunctionParagraph = document.getElementById("simple-function");
    console.log(displayText);
    simpleFunctionParagraph.textContent = displayText;

}

function functionParameters(value) {
    const functionParametersParagraph = document.getElementById("function-parameters");
    console.log(value);
    functionParametersParagraph.textContent = value;
}

function functionReturn() {
    return "Many functions return values.";
}


// simpleFunction();
// functionParameters("Many functions take parameters.");
// adder(4, 9);
