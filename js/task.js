/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() { // Выводим результат
    return this.items;
  },
  add(product) { // Создаем объект newProduct, распыляем туда product и добавляем свойство (ключ quantity со значением 1). Пушим все в масив объектов items
        
    for (const item of this.items) {
      if (item.name === product.name) {
        item.quantity += 1;
        return;
      }
    }
    
    const newProduct = {
      ...product,
      quantity: 1,
    };
    
    this.items.push(newProduct);
  },
  remove(productName) { // Удаляем объект с именем productName
    for (let i = 0; i < this.items.length; i += 1) {
      const item = this.items[i];

      if (productName === item.name) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() { // Считаем общую сумму price в масиве объектов items
    const { items } = this; // Деструктуризация .this
    let total = 0;

    for (const {price, quantity} of items) {
      total += price * quantity;
    }
    return total;
  },
  increaseQuantity(productName) {}, // увеличить количество. Если productName есть в корзине увеличить quantity на 1, если нет ничего не делаем.
  decreaseQuantity(productName) {}, // уменьшить количество. Если productName есть в корзине УМЕНЬШИТЬ quantity на 1, если нет ничего не делаем.
};

console.table(cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍇', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });
cart.add({ name: '🍓', price: 110 });

console.log('Total: ', cart.countTotalPrice());

console.table(cart.getItems());

cart.remove('🍋');
console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());

// cart.increaseQuantity('🍎');
// console.table(cart.getItems());

// cart.decreaseQuantity('🍋');
// cart.decreaseQuantity('🍋');
// console.table(cart.getItems());

