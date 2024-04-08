import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System under test
    const sut = createSut('T-shirt', 49.9);
    expect(sut).toHaveProperty('name', 'T-shirt');
    expect(sut).toHaveProperty('price', 49.9);
  });
});
