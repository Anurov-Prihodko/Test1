const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Data passed into resolve function :)');
    
    // Если что-то не так, вызываем reject и передаем ошибку
    reject("Error passed into reject function :(")

  }, 2000);
});

// Выполнится мгновенно
console.log('BEFORE promise.then');

// const onResolve = data => {
//   console.log('INSIDE promise.then - onResolve');
//   console.log(data); // "Data passed into resolve function :)"
// };

// const onReject = error => {
//   console.log('INSIDE promise.then - onReject');
//   console.log(error); // "Error passed into reject function :("
// };

promise.then(
  // будет вызвана через 2 секунды, если обещание выполнится успешно
 data => {
  console.log('INSIDE promise.then - onResolve');
  console.log(data); // "Data passed into resolve function :)"
},
  // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
   error => {
  console.log('INSIDE promise.then - onReject');
  // console.log(error); // "Error passed into reject function :("
},
);

// Выполнится мгновенно
console.log('AFTER promise.then');

promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });