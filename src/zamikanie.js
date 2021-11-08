// function one() {
//   let a = 0
//   return function () {
//     a += 1
//     return a
//   }
// }

// let pug = one()
// let dog = one()

// console.log(pug())
// console.log(pug())
// console.log(pug())

// console.log(dog())
// console.log(dog())
// console.log(dog())

function bind(person, fun) {
  return function (...args) {
    fun.apply(person, args)
  }
}

function logPerson() {
  console.log(`Person ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'Михаил', age: 22, job: 'Frontend' }
const person2 = { name: 'Елена', age: 19, job: 'SMM' }

console.log(bind(person1, logPerson))
bind(person2, logPerson)()
