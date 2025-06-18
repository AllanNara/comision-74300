import { Router } from "express";

const petsCollection = [
  {
    id: 1,
    petName: "Shaggy", 
    hasAdopted: false,
    animal: "Dog"
  }
]

const petsRouter = Router();

petsRouter.get("/", (req, res) => {
  res.json(petsCollection)
});

petsRouter.post("/", (req, res) => {
  const { petName, animal } = req.body;
  const newPet = { petName, animal, id: petsCollection.length + 1, hasAdopted: false }
  petsCollection.push(newPet)
  res.json({ status: "success", pet: newPet })
});

export default petsRouter;
