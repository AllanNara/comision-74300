import { Router } from "express";
import { usersColecction } from "./users.router.js";

const viewsRouter = Router();

viewsRouter.get("/pets", (req, res) => {
  res.render("pets")
})

viewsRouter.get("/form", (req, res) => {
  res.render("form-example")
})

viewsRouter.get("/profile/:uid", (req, res) => {
  const { uid } = req.params;
  const userFound = usersColecction.find(u => u.id === parseInt(uid))
  if(!userFound) {
    return res.send("<h3> Usuario no encontrado </h3>")
  }

  res.render("profile", { ...userFound })
})

export default viewsRouter;
