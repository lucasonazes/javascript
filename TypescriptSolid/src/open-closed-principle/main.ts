/*
Open/Closed Principle
classes must be open to extensions, but closed to modifications.
*/

import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { TenPercentDiscount } from './classes/discount';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('T-shirt', 49.9));
shoppingCart.addItem(new Product('Pants', 79.9));
shoppingCart.addItem(new Product('Cardigan', 120));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
