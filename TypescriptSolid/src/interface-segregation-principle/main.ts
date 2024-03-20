/*
Interface Segregation Principle
Clients shouldn't be forced to rely on interfaces, classes or types they don't use.
*/

import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { TenPercentDiscount } from './classes/discount';
import { IndividualCustomer } from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const customer = new IndividualCustomer();
const order = new Order(shoppingCart, messaging, persistency, customer);

shoppingCart.addItem(new Product('T-shirt', 49.9));
shoppingCart.addItem(new Product('Pants', 79.9));
shoppingCart.addItem(new Product('Cardigan', 120));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
