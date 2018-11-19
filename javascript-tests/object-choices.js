var simpleObject = {
    sayName: "Simple Object",
    getName: function() {
    return this.sayName;
    }
};


simpleObject.dynamicMethod = "Dynamic Method";


function loader() {
    const objectLiteralButton = document.getElementById('simple-object-action');
    const functionButton = document.getElementById('function-object-action');
    const customClassButton = document.getElementById('custom-class-action');

    objectLiteralButton.onclick = function() {

    }

    functionButton.onclick = function() {

    }

    customClassButton.onclick = function() {

    }
}



window.onload = loader;

console.log(simpleObject.sayName);
