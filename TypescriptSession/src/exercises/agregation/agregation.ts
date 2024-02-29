export class Cart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]) {
    for (const product of products) {
      this.products.push(product);
    }
  }

  qtyProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((add, product) => add + product.price, 0);
  }
}

export class Product {
  constructor(
    public _name: string,
    public price: number,
  ) {}
}

const product1 = new Product('t-shirt', 49.9);

const shoppingCart = new Cart();
shoppingCart.insertProducts(product1);

console.log(shoppingCart.totalValue());
