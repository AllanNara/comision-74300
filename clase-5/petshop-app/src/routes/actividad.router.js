import { Router } from "express";
import { usersColecction } from "./users.router.js"

const viewsRouter = Router();

let food = [
  { name: "banana", price: 90 },
  { name: "manzana", price: 10 },
  { name: "pera", price: 100 },
  { name: "sandia", price: 15 },
  { name: "naranja", price: 50 },
]

viewsRouter.get("/", (req, res) => {
  const indiceAleatorio = Math.floor(Math.random() * usersColecction.length + 1) - 1 
  console.log({indiceAleatorio})
  const user = usersColecction[indiceAleatorio]
  res.render("actividad", {
    user,
    isAdmin: user.isAdmin,
    food
  })
})

export default viewsRouter;
