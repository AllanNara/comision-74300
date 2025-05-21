
class Credential {
  constructor(cid, student, course) {
    this.cid = cid;
    this.student = student;
    this.course = course;
  }
  getInfo() {
    return `El alumno ${this.student}, con el id ${this.cid} pertenece al curso de ${this.course}`
  }

}

const martinCredential = new Credential(123534, "Martin", "Backend")
const juliaCredential = new Credential(564323, "Julia", "UX/UI")

console.log(martinCredential.getInfo())
console.log(juliaCredential.getInfo())

