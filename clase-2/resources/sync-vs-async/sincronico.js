function operacionSincronica() {
  const inicio = Date.now();
  while (Date.now() - inicio < 5000) {
    //
    // Simula operación bloqueante (2 segundos)
    // 
  }
  console.log("Operación completa (sincrónica)");
}

console.log("Inicio");
operacionSincronica();
console.log("Fin");
