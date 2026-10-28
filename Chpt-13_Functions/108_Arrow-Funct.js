// Conventional way of writing a function
function learning(){
    console.log('Hello World');
}

learning();

// function as expression i.e. Assign an entire function to a variable.
const Actions = function() {  // Also called anonymous funct
    console.log('Hello World');
}

learning();

// Arrow function

const Actions1 = (name) => `Hello, ${name}`; 