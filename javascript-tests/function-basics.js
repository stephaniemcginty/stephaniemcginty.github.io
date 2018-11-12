window.onload = () => {
   
    
    const functionCalls = document.getElementById("function-calls");
    const callUserInput = document.getElementById('call-user-input');
    

    functionCalls.onclick = () => {
       simpleFunction();
       functionParameters("Many functions take parameters.");
       const returnValue = functionReturn();
       console.log(returnValue);
       const simpleFunctionReturn = document.getElementById("function-return");
       simpleFunctionReturn.textContent = returnValue;  
    }

    callUserInput.onclick = () => {
        const userInputParagraph = document.getElementById("show-user-input");
        const userInput = document.getElementById('user-input');
        userInputParagraph.textContent = userInput.value;
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
