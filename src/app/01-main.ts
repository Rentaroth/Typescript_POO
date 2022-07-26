import axios from 'axios';
import { Product } from './models/product.model'

(async () => {
  async function getProducts() {
    const rta = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products'); //Se puede tipar de esta forma si la librería soporta TS
    const data = rta.data as Product[]; // Si no soporta TS se puede forzar el tipado de esta forma
    return data;
  }

  console.log('Start!');
  console.log('---'.repeat(10));
  const rta3 = await getProducts();
  console.log(rta3.map((item) => `${item.id} - ${item.title}`));
})();
