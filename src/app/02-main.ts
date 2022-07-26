import { productMemoryService } from './service/product_memory.service';
import { faker } from '@faker-js/faker';

const productService = new productMemoryService();

productService.create({
  title: faker.commerce.productName(),
  price: parseInt(faker.commerce.price()),
  description: faker.commerce.productDescription(),
  images: faker.helpers.arrayElements(),
  categoryId: parseInt(faker.datatype.uuid()),
});

const products = productService.getAll();
const productId = products[0].id;

productService.updateProduct(productId, {
  title: 'Name changed',
});

const updated = productService.findOne(productId);

console.log(updated);
