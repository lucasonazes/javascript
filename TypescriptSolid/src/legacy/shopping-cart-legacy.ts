type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(product: CartItem): void {
    this._items.push(product);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  // + is used to return a value of type number
  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your cart is empty');
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Your order with a total value of ${this.total()} has been received`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Message sent: ', msg);
  }

  saveOrder(): void {
    console.log('Order saved sucessfully');
  }

  clear(): void {
    this._items.length = 0;
    console.log('Shopping cart cleared');
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'T-shirt', price: 49.9 });
shoppingCartLegacy.addItem({ name: 'Pants', price: 79.9 });
shoppingCartLegacy.addItem({ name: 'Cardigan', price: 120 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
