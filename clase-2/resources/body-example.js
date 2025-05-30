const request = {
  method: "POST",
  host: "127.0.0.1",
  header: {},
  body: {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 21,
    email: "juan.perez@example.com",
    password: "1234segura",
    cursos: [
      {
        id: "c1",
        nombre: "Matemáticas",
        estado: "en curso",
      },
      {
        id: "c2",
        nombre: "Historia",
        estado: "completado",
      },
    ],
    credenciales: {
      tipo: "estudiante",
      institucion: "Universidad Nacional",
      matricula: "2025-UN-0345",
    },
  },
};

function procesarCuerpoDeLaPeticion(request) {
  const { email, password, ...datosDelUsuario } = request.body;
  console.log(email, password);
  console.log("Sesion Iniciada!");
  console.log("Registrando datos...");
  console.log({ datosDelUsuario });
}

procesarCuerpoDeLaPeticion(request)
