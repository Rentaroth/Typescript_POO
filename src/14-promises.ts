import axios from "axios";

(async () => {
  function delay(time: number) {
    const promise = new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve('true');
      }, time);
    });
    return promise;
  }

  function getProducts() {
    const promise = axios.get('https://api.escuelajs.co/api/v1/products');
    return promise;
  }

  async function getAsyncProducts() {
    const promise = await axios.get('https://api.escuelajs.co/api/v1/products');
    return promise.data;
  }

  console.log('Start!');
  console.log('---'.repeat(10));
  const rta = await delay(500);
  console.log(rta);
  console.log('---'.repeat(10));
  const rta2 = await getProducts();
  console.log(rta2.data[9]);
  const rta3 = await getProducts();
  console.log(rta3.data[9]);
})();
