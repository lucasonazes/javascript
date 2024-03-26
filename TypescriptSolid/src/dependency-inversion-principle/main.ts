/*
Dependency Inversion Principle
High-level modules shouldn't rely on low-level modules. Both must depend on abstract modules.
Rely on abstraction, not on implementation
Abstractions shouldn't depend on details. Details must depend on abstractions.
*/

import { ShoppingCart } from './classes/shopping-cart';
import { Order } from './classes/order';
import { Messaging } from './services/messaging';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { TenPercentDiscount } from './classes/discount';
import {
  EnterpriseCustomer /*, IndividualCustomer*/,
} from './classes/customer';

// const fiftyPercentDiscount = new FiftyPercentDiscount();
const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
/* const individualCustomer = new IndividualCustomer(
  'Lucas',
  'Onazes',
  '111.111.111-11',
); */
const enterpriseCustomer = new EnterpriseCustomer('Lafort', '1111111111');

const order = new Order(
  shoppingCart,
  messaging,
  persistency,
  enterpriseCustomer,
);

shoppingCart.addItem(new Product('T-shirt', 49.9));
shoppingCart.addItem(new Product('Pants', 79.9));
shoppingCart.addItem(new Product('Cardigan', 120));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
