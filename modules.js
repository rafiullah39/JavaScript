// ES Modules vs CommonJS
// note: dono ek sath ek hi file mein run nahi ho saktay, isliye dono ka
// syntax alag alag dikhaya gaya hai reference ke liye

//  ES Modules (import/export)
// utils.js
export function greet() {
  console.log("hi from ES module");
}
export const PI = 3.14159;

// main.js
// import { greet, PI } from './utils.js';
// greet();


// CommonJS (require/module.exports) 
// utils.js
function greetCJS() {
  console.log("hi from CommonJS");
}
module.exports = { greetCJS };

// main.js
// const { greetCJS } = require('./utils.js');
// greetCJS();


/*
ES modules wo tarika hai jo humne pehlay bhi use kiya hai, import aur
export keywords ke sath, ye browsers mein directly chalta hai aur ye
sab kuch code chalnay se pehlay hi load kar leta hai. CommonJS purana
tarika hai jo plain node.js mein default hota hai, require() aur
module.exports use hotay hain. Sab se bara farak ye hai ke require()
hum code mein kahin bhi likh saktay hain, jaisay kisi if statement ke
andar bhi, kyunke ye code chalnay ke dauran load hota hai na ke pehlay
se. ES modules zyada modern hain aur browser + naye node dono mein
chalte hain, CommonJS sirf node ka purana tarika hai. Ye samajhna mushkil
nahi tha, bas dono ka syntax yaad rakhna tha ke import/export ek jagah
aur require/module.exports dusri jagah use hota hai.
*/
