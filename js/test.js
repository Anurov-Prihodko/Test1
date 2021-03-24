function checkStorage(available, ordered) {
  let message;

if (ordered > available) {
    message = 'На складе недостаточно товаров!';
  } else {
    message = 'Заказ оформлен, с вами свяжется менеджер';
  }
 
  return message;
}