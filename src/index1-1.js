/*
ЗАДАЧА 1
Функция должна вернуть сумму всех нечетных чисел
*/

// function calc(arr) {
//   let total = null

// =====Через reduce и тернарный оператор ======
//   return arr.reduce((acc, ar) => (ar > 0 && ar % 2 ? acc + ar : acc), 0)

// ============

// ====== Через forEach ======
//   arr.forEach((a) => {
//     if (a > 0 && a % 2 === 1) {
//       total += a
//     }
//   })
// ============

// ====== Через for ======
//   for (let i = 0; i < arr.length; i += 1) {
//     // console.log(arr[i])
//     if (arr[i] > 0 && arr[i] % 2 === 1) {
//       total += arr[i]
//     }
//   }
// ============
//   return total
// }

// console.log(calc([5, 0, -5, 20, 88, 17, -32]))

/*
ЗАДАЧА 2
В функцию передается массив целых чисел и число num. Необходимо написать функцию,
которая вернет булево значение, true в случае если в переданном массиве есть два
числа, сумма которых равна num, иначе false.  
*/

// function check(arr, num) {
//   for (let i = 0; i < arr.length; i++) {
//     // console.log('i: ', arr[i])
//     for (let j = i + 1; j < arr.length; j++) {
//       //   console.log('j: ', arr[j])
//       if (arr[i] + arr[j] === num) {
//         return true
//       }
//     }
//   }
//   return false
// }

// console.log(check([10, 15, 3, 7], 20)) // false
// console.log(check([10, 15, 3, 7], 17)) // true
// console.log(check([15, 15, 5, 7], 20)) // true
// console.log(check([15, 15, 5, 7, 9, 23], 99)) // false

/*
ЗАДАЧА 3
В функцию передается целое положительное число. Необходимо сделать так, чтобы 
функция возврщала сумму всех цифр в переданном числе. 
*/

// function sumDigits(num) {
// ====== Через цикл while - рекурсия ======
//   let summ = 0
//   // Цикл длится до момента пока num не станет 0
//   while (num > 0) {
//     // узнаем последнее число и плюсуем его в summ
//     summ += num % 10
//     // убираем последюю цифру
//     num = Math.floor(num / 10)
//   }
//   return summ
// ============
// ====== Через трансформацию в масив и reduce и унарный плюс ======
//   let str = num.toString()
//   let arr = [...str]
//   return arr.reduce((acc, el) => acc + +el, 0)
// ============
// ====== Через трансформацию в масив ======
//   let pug = num.toString().split('')
//   let summ = null
//   pug.map((e) => (summ += Number(e)))
//   return summ
// ============
// ====== Через строку и for ======
//   let pug = num.toString()
//   let summ = null
//   for (let i = 0; i < pug.length; i += 1) {
//     // console.log(Number(pug[i]))
//     summ += Number(pug[i])
//   }
//   return summ
// ============
// }

// console.log(sumDigits(123)) // 6
// console.log(sumDigits(9045)) // 18
// console.log(sumDigits(3)) // 3
