// generators and iterators

// generator function - pause aur resume kar sakta hai
function* numberGen() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numberGen();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// generator ko for...of se bhi loop kar saktay hain direct
for (const num of numberGen()) {
  console.log(num); // 1, 2, 3
}


// manual iterator - bina generator ke wahi kaam by hand
function makeNumberIterator() {
  let current = 1;
  const max = 3;

  return {
    next() {
      if (current <= max) {
        return { value: current++, done: false };
      }
      return { value: undefined, done: true };
    }
  };
}

const it = makeNumberIterator();
console.log(it.next()); // { value: 1, done: false }
console.log(it.next()); // { value: 2, done: false }
console.log(it.next()); // { value: 3, done: false }
console.log(it.next()); // { value: undefined, done: true }


// array ka apna built-in iterator bhi hota hai, for...of usi ko use karta hai
const arr = ["a", "b", "c"];
const arrIterator = arr[Symbol.iterator]();
console.log(arrIterator.next()); // { value: "a", done: false }
console.log(arrIterator.next()); // { value: "b", done: false }


/*
Generator function normal function jaisi nahi hoti, ye function* likh kar
banate hain aur ye ek dam se pura chal kar khatam nahi hoti balke beech mein
ruk jati hai jab bhi hum yield likhtay hain, aur jab tak dobara .next() call
na karein wahin ruki rehti hai, phir agli yield tak chalti hai. Iterator
simple si cheez hai, koi bhi object jiske pass ek next() function ho jo
{ value, done } wapis deta ho wo iterator kehlata hai. Array pehlay se hi
apna khud ka iterator rakhta hai jo for...of loop k peechay use hota hai,
hum ne isay khud bhi try kiya upar arr[Symbol.iterator]() likh kar. Meri
samajh mein generators is liye asaan lagay kyunke wo automatically ye
next() wala kaam khud handle kar detay hain, warna manual iterator mein
humein khud current variable track karna parta hai aur check bhi khud
likhna parta hai jaisa maine makeNumberIterator mein kiya.
*/
