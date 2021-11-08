const foo = { bar: 1 }
// foo.bar === 1 // true
// typeof foo.toString === 'function'

let pug = Object.create(foo)
pug.dog = 2

pug.mops = 3
// console.log(pug)

// Object.setPrototypeOf(pug, null)
// console.log(pug)

// ====== Заморозить обьект от изменнений ======
// Object.freeze(pug)
// ============

// ====== Выведет собственные и свойства прототипа обьекта ======
// for (key in pug) {
//   console.log(key)
// }
// ============

// ====== Вывести только собственные свойства обьекта ======
// const own = Object.keys(pug)
// console.log(own)
// ============

// ====== Проверить есть ли свойство в обьекте ======
// console.log(pug.hasOwnProperty('dog'))
// ============

// ====== Убрать прототип ======
// Object.setPrototypeOf(pug, null)
// console.log(pug)
// =============

// ====== Создать обьект без прототипа ======
// const rem = Object.create(null)
// console.log(rem)
// =============

// ====== Функция конструктор ======
// function User(name) {
//   this.name = name
//   this.isAdmin = false
// }

// let user = new User('Вася')
// =============

// console.log(parseInt(Object.values(pug).join('')))
// console.log(pug.dog)
// console.log(foo.hasOwnProperty())
// console.log(foo.isPrototypeOf())
// console.log(foo.propertyIsEnumerable())
// console.log(foo.toLocaleString())
// console.log(foo.toString())
// console.log(foo.valueOf())

// foo.constructor === Object

// const own = Object.keys(user)
// console.log(own)

// ====== Классы =======
class Pug {
  constructor(age, fun, summ, name) {
    this.age = age
    this.fun = fun
    this.summ = summ
    this.name = name
    // this.love = this.age * Number(this.fun)
  }

  get love() {
    return this.age * Number(this.fun)
  }
}

const lenyia = new Pug(13, '89', '10 кг', 'Lenyia')
// const grisha = new Pug(5, '93', '7 кг', 'Grisha')

// console.log(lenyia)

// console.log(
//   `Это ${lenyia.name}, ему ${lenyia.age} лет. Он весит ${lenyia.summ} и в нём ${lenyia.fun}% веселья!`
// )

// console.log(
//   `Это ${grisha.name}, ему ${grisha.age} лет. Он весит ${grisha.summ} и в нём ${grisha.fun}% веселья!`
// )

// console.log(lenyia.love)
// =============

// ====== Функция конструктор =======
// function User(name) {
//   this.name = name
//   this.isAdmin = function () {
//     console.log('Valera')
//   }
// }

// let admin = new User('Вася')

// console.log(admin)
// =============
