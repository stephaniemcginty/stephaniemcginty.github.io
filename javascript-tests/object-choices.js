var simpleObject = {
    firstName: "Simple Object",
    sayName: function() {
        return this.firstName;
    }

};

simpleObject.dynamicMethod = function() {
    return "Dynamic Method";
}

function FunctionObject() {
    var privateFunction = function() {
        return "Private Function";
    }

    FunctionObject.prototype.sayName = function() {
        FunctionObject.privateFunction();
    }
}

simpleObject.sayName();
simpleObject.dynamicMethod();
var functionObject = new FunctionObject();
//functionObject.sayName();



function loader() {
    const objectLiteralButton = document.getElementById('simple-object-action');
    const functionButton = document.getElementById('function-object-action');
    const customClassButton = document.getElementById('custom-class-action');

    objectLiteralButton.onclick = function() {
        const objectLiteralDisplay = document.getElementById('simple-object-display');
        objectLiteralDisplay.textContent = simpleObject.sayName(); 

    }

    functionButton.onclick = function() {
        const functionButtonDisplay = document.getElementById('function-object-display');
        functionButtonDisplay.textContent = functionObject.sayName();
    }

    customClassButton.onclick = function() {

    }
}

window.onload = loader;


