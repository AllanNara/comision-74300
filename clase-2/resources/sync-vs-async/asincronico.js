function operacionAsincronica() {
  setTimeout(() => {
    console.log("Operación completa (asincrónica)");
  }, 5000); // Simula operación de 2 segundos
}

console.log("Inicio");
                        operacionAsincronica();
console.log("Fin");           |
                              |
                      <-------~
