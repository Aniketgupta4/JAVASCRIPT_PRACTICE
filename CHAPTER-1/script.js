// JAVASCRIPT -> programming language 

// by html and css we can create a webpage but manipulate html css by js
// but to make it dynamic we need javascript
// javascript is a client side scripting language
// javascript is a brain of a webpage where html is a skeleton and css is a skin
// javascript is a case sensitive language,dynamic language,loosely typed language,interpreted language,multi paradigm language,single threaded language
// created by Brendan Eich in 1995 in 10 days 
// our browser understands javascript html and css
// javascript can be run in browser and in server also

// run via -> node script.js, live server in vs code
console.log("hello world");
 
// **** having v8 engine
// v8 engine is created by google for google chrome
// v8 engine is written in c++
// v8 engine is used in node js also
// v8 engine converts javascript code into machine code
// understands javascript code and convert it into machine code



// story of javascript

// netscape browser very popular in 1990s
// popular beacuse it understand html css and javascript
// netscape wanted to add a scripting language in their browser
// so they hired Brendan Eich
// Brendan Eich created a scripting language in 10 days
// microsoft created their own browser -> internet explorer
// microsoft wanted to add a scripting language in their browser
// so they created jscript -> similar to javascript -> both are free
// microsoft give all services free -> netscape was not able to compete with microsoft beacuse they are not free some features
// PROBLEM -> netscape browser pe run karna hai so javascript pe code likho and internet explorer pe run karna hai to jscript pe code likho
// so to solve this problem both the companies went to ecma international -> an organization which sets standards for different technologies
// ecma international created a standard(follow rules) for javascript and jscript -> ECMAScript
// ecma made standards -> ES1, ES2, ES3, ES5, ES6(2015), ES7(2016), ES8(2017), ES9(2018), ES10(2019), ES11(2020), ES12(2021), ES13(2022), ES14(2023)
// made standards ki ==> both the companies have to follow these standards -> internally kaise bhi bana lo but externally jo hum use karenge wo same hoga dono me
// now both the companies started following these standards
// now both the companies started adding their own features also -> microsoft added some features in jscript and netscape added some features in javascript
// and netscape was not able to compete with microsoft beacuse of their free services -> so netscape lost their popularity and microsoft became popular
// ********** web browser code -> open source kar diya -> mozilla foundation -> mozilla firefox
// mozilla firefox is open source and free -> so it became popular
// mozilla vs microsoft -> mozilla won
// **** slow in both mozilla and internet explorer

// **** google came into picture -> created google chrome in 2008
// google chrome is very fast -> v8 engine
// google chrome is open source and free -> chromium project
// **** google chrome became very popular -> now most of the people are using google chrome -> fast and free

// now all the browsers are following the ecma standards
// safari is using its own engine -> webkit engine
// mozilla use spider monkey to convert javascript code into machine code -> faster 
// internet explorer is very slow -> not used now
// microsoft edge is using v8 engine now -> very fast
// now all the browsers are using v8 engine -> google chrome, mozilla firefox, opera, brave, edge






// **** js engine(code in c++ -> upto 70%) -> convert js code into machine code

//  /////js code/////// -----> js engine (v8 engine) -----> machine code -----> computer understand

// 1. parse -> check for syntax error
// 2. compile -> convert js code into machine code
// 3. execute -> run the code



// **** vscode cant undetand v8 engine -> so we need node js to run js code in vs code
// v8 engine + some functions = node js
// node js have some inbuilt functions -> to work with file system, to work with os, to work with path, to create server

// node js is a runtime environment to run js code outside the browser
// node js is built on v8 engine
// node js is used to run js code in server also
// node js is used to create server side applications
// install node js -> download lts version (stable version) -> check version -> node -v, npm -v
// run file by -> node script.js 

// so server side and client side dono me hum js use kar sakte hai by node js and browser
// backend me hum node js use kar sakte hai
// frontend me hum browser use kar sakte hai
// by node js 


// basics

// we have 3 things let , const, var to declare a variable in js
// var -> function scope
// let and const -> block scope
// block scope -> if, for, while, switch, {}
// function scope -> function ke andar hi access kar sakte hai
// global scope -> anywhere in the code

let a = 10;
console.log(a);

// let -> new way
let b = "hello";
console.log(b);
// **** b = 20; // re assign kar sakte hai

const c = 20;
console.log(c);
// **** c = 30; // error -> const variable cannot be re assigned


// var -> old way -> not used now
var d = 30;
console.log(d);
