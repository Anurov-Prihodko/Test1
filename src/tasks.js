// ====== TASK 1 ======
let z = 5

for (; z < 10; z += 1);

// z = 5 => 5 + 1
// z = 9 => 9 + 1
// z = 10 => --

// console.log(z)

// ====== TASK 2 ======
// const arr = [1, 2, 3]

// for (i = 0; i < arr.length; arr[i++] = 0);
// arr[0] = 0
// arr[1] = 0
// arr[2] = 0

// console.log(arr)

// ====== TASK 3 TDZ ======
// 1
// var x =

;(function (x) {
  //   console.log(x)
  //   let x = 'Pug wants to eat'
  //   console.log(x)
})('Pug live')

// ============
// 2
let a = f()
// const b = 5

function f() {
  //   return console.log(b)
}

// ============
// 3
;(function (a, j = a) {
  //   console.log(a, j)
})(1, undefined)

// ============
// 4
let b = 10

// function one(a = b, b) {
function one(b, a = b) {
  //   console.log(a, b)
}

// one(undefined, 20)

//

//

//

//

//

// У аргументов своя область видимости и если свойство вычисляемое -
// выполнение кода идет с права на лево.Это пример временнрой мертвой зоны TDZ.
// TDZ - это момент когда мы уже объявили переменную но еще не выполнили ее значение.
// let x = x
