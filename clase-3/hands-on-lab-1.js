import crypto from "crypto"

class UserManager {
  static users = [];
  static #salt = crypto.randomBytes(16)

  static createUser(userObjetc) {
    const { first_name, last_name, email, password } = userObjetc;
    if(UserManager.users.find(u => u.email === email)) {
      console.log("User already exist")
      return
    }
    const hash = UserManager.#createHash(password)
    const newUser = {
      first_name,
      last_name,
      email,
      password: hash
    }
    UserManager.users.push(newUser);
    console.log("User created successfully\n");    
  }

  static getUsers() {
    console.log(UserManager.users)
  }

  static login(email, password) {
    const userFound = UserManager.users.find(u => u.email === email);
    if(!userFound) {
      console.log("User not found")
      return
    }
    const result = UserManager.#validatePassword(password, userFound)

    if(result) console.log("Usuario logeado!")
    else console.log("Credenciales invalidas")
  }

  static #createHash(password) {
    const digest = "sha3-256";
    const hash = crypto.pbkdf2Sync(password, UserManager.#salt, 50, 33, digest)
    return hash.toString("hex")
  }

  static #validatePassword(password, user) {
    const digest = "sha3-256";
    const hash = crypto.pbkdf2Sync(password, UserManager.#salt, 50, 33, digest).toString("hex")
    return hash === user.password
  }
}

UserManager.createUser({
  first_name: "allan", 
  last_name: "reynoso",
  email: "allan@mail.com",
  password: "unodostres"
})

UserManager.createUser({
  first_name: "Teo", 
  last_name: "Gutierrez",
  email: "teo@mail.com",
  password: "unounouno"
})

UserManager.getUsers()

UserManager.login("teo@mail.com", "unounouno")


