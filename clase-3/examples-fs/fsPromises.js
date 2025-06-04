import fs from "fs";

// / PROMESAS THEN/CATCH
// fs.promises.writeFile("./ejemplo3-a.txt", "Hola soy una promesa!")
//   .then(() => fs.promises.readFile("./ejemplo3-a.txt", "utf-8"))
//   .then((data) => {
//     console.log(data);
//     return fs.promises.appendFile("./ejemplo3-a.txt", "\n Mas contenido");
//   })
//   .then(() => fs.promises.readFile("./ejemplo3-a.txt", "utf-8"))
//   .then((data) => {
//     console.log(data);
//     return fs.promises.unlink("./ejemplo3-a.txt");
//   })
//   .catch((err) => console.log("Hubo un error: ", err));

// / PROMESAS ASYNC/AWAIT
const operacionAsincronica = async () => {
  try {
    await fs.promises.writeFile("./ejemplo3-b.txt", "Hola soy una promesa!");
    let data = await fs.promises.readFile("./ejemplo3-b.txt", "utf-8");
    console.log(data);

    await fs.promises.appendFile(
      "./ejemplo3-b.txt",
      "\n Mas contenido y con promesas!",
    );

    data = await fs.promises.readFile("./ejemplo3-b.txt", "utf-8");
    console.log(data);

    await fs.promises.unlink("./ejemplo3-b.txt");
  } catch (error) {
    console.error("Ups, un error a la vista: " + error);
  }
};

operacionAsincronica();
