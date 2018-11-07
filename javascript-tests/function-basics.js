window.onload = () => {
   
    
    const functionCalls = document.getElementById("function-calls");
    

    functionCalls.onclick = () => {
       simpleFunction();
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

function add (a, b) {
    console.log(a + b);
}

function add() {
    console.log(2 + 3);
}

function functionParameters(value) {
    console.log(value)
}

function functionReturn() {
    return "Many functions return values.";
}

// simpleFunction();
functionParameters("Many functions take parameters.");
add(6, 3);
add();
// adder(4, 9);
