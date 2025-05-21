const texto = "hola como estan los chicos de Coderhouse";
const edad = 26;
const estaEnVivo = true;

const credencial = {
  nombre: "Allan",
  rol: "profesor",
  cantidadDeAlumnosPresentes: 41,
  estanTodos: false,
  cursos: ["Backend", "Frontend", "DDBB"],
  getInfo: function() { console.log("Esta es la credencial de Allan") }
};

credencial.getInfo()

const noDefinido = undefined;
const vacio = null;
const noNum = NaN;
const date = new Date();

// -------------------------------------------------------- //

// con "var"
var variableComun = 123;

// con "const"
const birthday = 1999;
// birthday = "1999";
// birthday = false;

const cursos = ["Backend", "Frontend", "DDBB"];
// cursos = false;
cursos.push("Diseño Ux/Ui");
// console.log(cursos)

// con "let"
let modoEmergencia = false;
// console.log(modoEmergencia)
modoEmergencia = true;
// console.log(modoEmergencia)

//----------------- SCOPES

// Scope global
{
  // const miRobot = null;
  
  // Scope especifico
  {
    const miRobot = {};
    // miRobot.nombre = "Juan";
    // miRobot.color = "gris";
    // miRobot.cantNucleos = 34;
    // console.log(miRobot);
  }

  // console.log(miRobot);
}
