const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + 1;
};

const calcularNumeros = (cantidad, min, max) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!cantidad || !min || !max) reject("Hay valores faltantes")
      const numbers = {};
      for (let i = 0; i < cantidad; i++) {
        const random = randomNum(min, max);
        if (!numbers[random]) {
          numbers[random] = 1;
        } else {
          numbers[random]++;
        }
      }
      resolve(numbers);
    }, 0);
  });
};


calcularNumeros(8e7, 1)
  .then((data) => console.log(data))
  .catch((er) => console.log(er))
