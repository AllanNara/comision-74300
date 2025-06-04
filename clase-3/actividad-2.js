// MOMENT.JS version: 2.30.1

// npm install moment@2.30.1
import moment from "moment";

const currentDate = moment();
const myBirthday = moment("19990211");

if(!myBirthday.isValid()) console.error("Fecha de cumpleaños no valida");

const diffDate = currentDate.diff(myBirthday, "days")

console.log("Tu nacimiento ocurrio hace " + diffDate + " días")


// Comparar con la version anterior 1.6.0....
