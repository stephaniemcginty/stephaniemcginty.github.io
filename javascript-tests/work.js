var person = {
    firstName: "Stephanie",
    lastName: "McGinty",
    fullName: function () { 'use strict';
        return this.firstName + ' ' + this.lastName;

    }
};

var calculator = {
    operand01: -1,
    operand02: -1,
    add: function () {'use strict';
        return this.operand01 + this.operand02;
    },
    subtract: function () {'use strict';
        return this.operand01 - this.operand02;

    }
};

calculator.multiply = function () {'use strict';
    return calculator.operand01 * calculator.operand02;

}



function divider(title) {
    console.log("====================================");
    console.log(title);
    console.log("====================================");
}

divider('Person');

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());

divider('Calculator');

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;
console.log('operand01:', calculator.operand01);
console.log('operand02:', calculator.operand02);

console.log('add:', calculator.add());
console.log('subtract:', calculator.subtract());
console.log('multiply:', calculator.multiply());