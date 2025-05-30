const dividir = (dividendo, divisor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (divisor === 0) reject("No se puede hacer divisiones entre cero");
      resolve(dividendo / divisor);
    }, 0);
  });
};

// THEN / CATCH
// console.log("inicio de mi script")
// const resultadoDeMiPromesa = dividir(10, 0);
// resultadoDeMiPromesa
//   .then((resultado) => console.log(resultado))
//   .catch((error) => console.log(error))
// console.log("fin de mi script")

// ASYNC / AWAIT
const main = async () => {
  try {
    console.log("inicio de mi script");
    const resultadoDeMiPromesa = await dividir(10, 0);
    console.log(resultadoDeMiPromesa);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("fin de mi script");
  }
};

main();
