var person = {
    firstName: "Stephanie ",
    lastName: "McGinty",
    fullName: function () { 'use strict';
        return this.firstName + ' ' + this.lastName;

    }
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());