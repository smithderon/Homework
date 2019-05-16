var huh = "right"


// function Person(name, age, gender) {
//     this.name   = name;
//     this.age    = age;
//     this.gender = gender;
//   }
//   Person.prototype.incrementAge = function () {
//     return this.age += 1;
//   };

//   let mine = new Person("Aisha", 22, "female")

//   console.log(mine.name)

//   class Person{
//       constructor(name, skillLevel, IQ){
//           this.name = name
//           this.skillLevel = skillLevel
//           this.iq = IQ
//       }
//       incrementAbility(){
//           this.skillLevel += 1;
//       }
//   }

// let sum = (...args) => {
//     var result = 0
//     for(arg of args){
//         result += arg
//     }
//     return result
// }
// console.log(sum(4,5,5,5,1,2,3))

// // Itirnerary Operator
// // condition ? result1 : result2
// let isIt = (a) => {
//     return typeof a === "number" ? "this is a number!!!!" : "Nani sore!?"
// }

// console.log(isIt(42))

// let mult = (a, b) => { return a*b}

// console.log(mult(222, 9999))

// let obj = {
//     x: 20,
//     y: 25,
//     z: 10
// }
// let mlt = (...args) => {
//  var hai 
//  for (arg in args){
//      hai *= args
//  }
//  return hai
// }
// console.log(hai)

let vowelCount = 0

let vowels = ['a', 'e', 'i', 'o', 'u']

let str = "Omai wa mou shindeiru"

for (let i = 0; i < str.length; i ++){
    if(vowels.includes(str[i])){
        vowelCount += 1
    }
}
console.log(vowelCount)

var a = "hi"
var b = "Konban wa"

var [b,a] = [a, b]
console.log(a,b)