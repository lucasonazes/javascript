import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistency } from '../services/persistency';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistency: Persistency,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your cart is empty');
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Your order with a total value of ${this.cart.totalWithDiscount()} has been received`,
    );
    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'The client is: ',
      this.customer.getName(),
      this.customer.getIDN(),
    );
  }
}
