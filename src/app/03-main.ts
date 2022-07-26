import { ProductHttpService } from './service/product-http.service';

const productService = ProductHttpService.construct();

(async () => {
  try {
    console.log('--'.repeat(10));
    console.log('getAll');
    const products = await productService.getAll();
    const rta = products.filter((item) => item.price < 50);
    console.log(rta.map((item) => `${item.id} - ${item.title}`));

    console.log('--'.repeat(10));
    console.log('Update');
    const productId = products[0].id;
    await productService.updateProduct(productId, { title: 'Modificado' });

    console.log('--'.repeat(10));
    console.log('findOne');
    const modified = await productService.findOne(productId);
    console.log(modified);
  } catch (error) {
    console.error(error);
  }
})();
