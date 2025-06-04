import fs from "fs";

class UserManager {

  static async createUser(userObj) {
    const { name, age, course } = userObj;
    const users = await UserManager.getUsers();

    users.push({name, age, course})
    
    const json = JSON.stringify(users, null, 2)
    await fs.promises.writeFile("./users.json", json);
    console.log("Usuario creado!")
  }

  static async getUsers() {
    try {
      const json = await fs.promises.readFile("./users.json", "utf-8")
      return JSON.parse(json)
    } catch (error) {
      await fs.promises.writeFile("./users.json", JSON.stringify([]))
      return []
    }
  }

}

const main = async () => {
  console.log("inicio")
  await UserManager.createUser({ name: "pepe", age: 26, course: "Programacion Backend I"})
  await UserManager.createUser({ name: "maria", age: 26, course: "Programacion Backend I"})
  await UserManager.createUser({ name: "juan", age: 26, course: "Programacion Backend I"})
  await UserManager.createUser({ name: "juana", age: 26, course: "Programacion Backend I"})
  await UserManager.createUser({ name: "mario", age: 26, course: "Programacion Backend I"})
  console.log("fin")
}

main()
