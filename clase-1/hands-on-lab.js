class Contador {
  static globalCount = 0;

  constructor(nombreResponsable) {
    this.responsable = nombreResponsable;
    this.count = 0;
  }

  contar() {
    this.count++;
    Contador.globalCount++;
  }

  getResponsable() {
    return `El responsable del contador es ${this.responsable}`
  }

  getCuentaIndividual() {
    return `${this.getResponsable()} y su cuenta individual es de ${this.count}`
  }

  getCuentaGlobal() {
    return `La cuenta global es de ${Contador.globalCount}`
  }
}

const referencia = {
  globalCount: 0
}

const primerResp = new Contador("Martin");
const segundoResp = new Contador("Juana");
const tercerResp = new Contador("Carlos");

console.log(segundoResp.getCuentaGlobal())

tercerResp.contar()
tercerResp.contar()
tercerResp.contar()
tercerResp.contar()
console.log(tercerResp.getCuentaIndividual())
console.log(tercerResp.getCuentaGlobal())

primerResp.contar()
primerResp.contar()
console.log(primerResp.getCuentaIndividual())
console.log(primerResp.getCuentaGlobal())


console.log(segundoResp.getCuentaIndividual())
console.log(segundoResp.getCuentaGlobal())






