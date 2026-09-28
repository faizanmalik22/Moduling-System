//1. __dirname ,it print the current  working directory
//console.log(__dirname);//e:\NodeJs_Concepts

//2. __filename ,it print the current file name with path
//console.log(__filename);//e:\NodeJs_Concepts\NodeJs_Globals.js

//3. Module ,it is a object which is used to load the module in node js
//console.log(module);//it print the module object, which use to load the module in node js, so it is useful for moduling system
/*
module.exports → export
use module.exports to export the module from the current file and use require() to import the module in another file
 */

//Vip it used mostly in every node js application
//4.process ,it is a object which is used to get the information about the current process
console.log(process);//it print the process object, which use to get the information about the current process, so it is useful for process management
/*
 use process object to get the information about the current process
so in the process object we have many properties and methods which are used to get the information about the current process, so it is useful for process management
 process also have some very useful properties and methods.
 like when we want to store some secret infortmation like password, api key, etc we can use process.env to store the secret information in environment variable and we can access it using process.env.VARIABLE_NAME
 so we can store confidention information in the process proprty which is env (environment variable) and we can access it using process.env.VARIABLE_NAME
 */
/**
 process{env:{}}
 so env value is an object which is used to store the environment variable and we can access it using process.env.VARIABLE_NAME
 Cool stuff, 
 https://chatgpt.com/share/6ab9f989-a864-83e8-bf4d-e9955b6c8219
 */

 //VVIP
 //5. require ,it is a function which is used to load the module in node js
console.log(require);//used to load import the module in node js, so it is useful for moduling system (like module use to export the module and require use to import the module)
/*
module.exports → export
require() → import/use another module

Example:

math.js

const add = (a, b) => a + b;

module.exports = add;//export the add function

app.js

const add = require("./math");//import the add function from math.js

console.log(add(2, 3));
//VVip: https://chatgpt.com/share/6ab9fccf-c7d8-83e8-b56d-ea191ea7b775

 */

//6. global ,it is a object which is used to get the information about the current global object
console.log(global);//it print the global object, which use to get the information about the current global object, so it is useful for global management
//like we have window object in browser, we have global object in node js, so it is useful for global management
//we can acces it method and property directly without using global object bcz they are accesable globally