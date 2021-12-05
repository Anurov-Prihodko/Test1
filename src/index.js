// var People = [
//   [1, [2, [{ a: 1 }, 3]]],
//   ['Rustam', 25, 3, 4],
//   ['Ruslan', 35],
//   ['Aleksey', 29],
//   ['Vovan', 23],
// ]

// Array.prototype.max = function () {
//   return Math.max.apply(null, this)
// }

// function f1(item, level = 0) {
//   if (item instanceof Array || item instanceof Object) {
//     return (
//       item
//         .map(function (value, index) {
//           return f1(value, level + 1)
//         })
//         .max() - (level > 0 ? 0 : 1)
//     ) // Если главный массив не считаем
//   }
//   return level
// }

// console.log(f1(People))

// var a = { 1: 2, 3: 4 },
//   count = 0,
//   item

// for (item in a) {
//   count++
// }

console.log(50 / 'Apple')
