// prototype chain 

const parent = {
  canWalk: true
};

const child = Object.create(parent);
child.canJump = true;

console.log(child.canWalk); // true - child ke pass nahi hai lekin parent ke pass hai
console.log(child.canJump); // true - ye child ka apna hai


// class/extends bhi yehi cheez hai andar se

class Vehicle {
  honk() {
    console.log("beep beep");
  }
}

class Car extends Vehicle {
  drive() {
    console.log("car is driving");
  }
}

const myCar = new Car();
myCar.honk();  // works kyunke Car ke pass nahi hai but Vehicle ke pass hai
myCar.drive(); // ye direct Car ka apna method hai

console.log(myCar.hasOwnProperty("drive")); // false, drive() prototype pe hai object pe nahi
console.log(myCar instanceof Vehicle);      // true, chain mein Vehicle mil gaya


/*
Prototype chain samajhne ka simple tarika ye hai ke har object ke pechay ek
"backup" object hota hai. Jab hum kisi property ko access karte hain aur wo
us object ke pass nahi hoti to js khud hi us backup object mein check karta
hai, aur agar wahan bhi nahi mili to uske aagay wale backup mein, jab tak
mil na jaye ya chain khatam na ho jaye (null tak). Class aur extends bhi
yehi kaam kar rahay hote hain background mein - jab hum Car ko Vehicle se
extend karte hain to Car ka prototype Vehicle ban jata hai, isliye Car ke
object se hum Vehicle ke methods bhi use kar sakte hain jaisay humne honk()
use kiya upar. Confusing part mera ye tha ke pehlay lagta tha class alag
cheez hai lekin phir samajh aya ke ye sirf prototype chain ko likhne ka
asaan tarika hai.
*/
