import { Router } from "express";

export const usersColecction = [
  {
    id: 1,
    name: "Pepe",
    isOwner: false,
    email: "pepe@mail.com",
    isAdmin: false,
  },
  {
    id: 2,
    name: "Mariel",
    isOwner: false,
    email: "pepe@mail.com",
    isAdmin: true,
  },
  {
    id: 3,
    name: "Juana",
    isOwner: false,
    email: "pepe@mail.com",
    isAdmin: false,
  },
  {
    id: 4,
    name: "Marta",
    isOwner: false,
    email: "pepe@mail.com",
    isAdmin: false,
  },
];

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.json(usersColecction);
});

usersRouter.post("/", (req, res) => {
  const { name, email } = req.body;
  const newUser = {
    name,
    email,
    id: usersColecction.length + 1,
    isOwner: false,
  };
  usersColecction.push(newUser);
  res.json({ status: "success", user: newUser });
});

export default usersRouter;
