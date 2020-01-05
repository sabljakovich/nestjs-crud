import { Product } from './product';

describe('Product', () => {
  it('should be defined', () => {
    expect(new Product()).toBeDefined();
  });
});
