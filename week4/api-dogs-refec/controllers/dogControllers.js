// controllers/dogControllers.js
// Controller layer: handles HTTP requests/responses

const Dog = require("../models/dogModel");

function getAllDogs(req, res) {
  const dogs = Dog.getAllDogs();
  res.json(dogs);
}

function getDogById(req, res) {
  const id = req.params.dogId;
  const dog = Dog.getDogById(id);
  if (!dog) {
    return res.status(404).json({ message: "Dog not found" });
  }
  res.json(dog);
}

function createDog(req, res) {
  const { name, weight } = req.body;
  const newDog = Dog.createDog(name, weight);
  if (!newDog) {
    return res.status(400).json({ message: "Name and weight are required" });
  }
  res.status(201).json(newDog);
}

function updateDog(req, res) {
  const id = req.params.dogId;
  const updated = Dog.updateDog(id, req.body);
  if (!updated) {
    return res.status(404).json({ message: "Dog not found" });
  }
  res.json(updated);
}

function deleteDog(req, res) {
  const id = req.params.dogId;
  const success = Dog.deleteDog(id);
  if (!success) {
    return res.status(404).json({ message: "Dog not found" });
  }
  res.json({ message: `Dog with id ${id} deleted successfully` });
}

module.exports = {
  getAllDogs,
  getDogById,
  createDog,
  updateDog,
  deleteDog
};
