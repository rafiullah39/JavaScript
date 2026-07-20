// ES6+ syntax - destructuring, spread, rest, optional chaining

// destructuring
const person = { name: "Ali", age: 20 };
const { name, age } = person;
console.log(name, age); // "Ali" 20

// nested destructuring
const student = { name: "Rafi", info: { city: "Swat" } };
const { info: { city } } = student;
console.log(city); // "Swat"

// array destructuring
const skills = ["JS", "C++", "Java"];
const [first, , third] = skills;
console.log(first, third); // "JS" "Java"


// spread - kisi cheez ko unpack karke copy karna
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

const baseObj = { role: "student" };
const fullObj = { ...baseObj, university: "Air University" };
console.log(fullObj);


// rest - values ko collect karke ek array mein daalna
function total(...prices) {
  return prices.reduce((sum, p) => sum + p, 0);
}
console.log(total(10, 20, 30)); // 60


// optional chaining - crash hone se bachata hai
const user = {};
console.log(user.address?.city); // undefined, error nahi ayega
console.log(user.address?.city ?? "no city"); // "no city" fallback ke sath


/*
Destructuring ka matlab hai jab humaray pass koi object hota hai jismein
properties hoti hain, to hum unn values ko seedha variables mein nikal
saktay hain ek hi line mein, jaisay const { name, age } = person likh kar
humne person ke andar ki name aur age ki values directly variables mein le
li. Spread ka matlab hota hai kisi cheez ko unpack karna, teen dots laga kar
jo bhi values us cheez ke andar hain wo bilkul copy hoke waha aa jati hain.
Rest bilkul spread jaisa dikhta hai lekin ulta kaam karta hai, ye values ko
collect kar ke ek array bana deta hai, function parameters mein zyada use
hota hai. Optional chaining simple si cheez hai jo humaray code ko crash
hone se bachati hai, agar koi cheez exist nahi karti to error dene ke bajaye
undefined de deta hai.
*/
