//const localModule = require("./path-to-module"); // Local import module
//const fs = require("node:fs"); // Built in module
const upperCase = require("upper-case").upperCase; // Third party module


function greet (name) {
    console.log(upperCase(`Hello ${name}!, Welcome to codevolution`));
}

// greet("Dof");
module.exports = greet;
