// models/dogModel.js
// Model layer: data + business logic

let dogArray = [];
let nextId = 1;

function getAllDogs() {
  return dogArray;
}

function createDog(name, weight) {
  if (!name || weight === undefined) {
    return false;
  }
  const newDog = {
    id: nextId++,
    name,
    weight
  };
  dogArray.push(newDog);
  return newDog;
}

function getDogById(id) {
  const numericId = Number(id);
  const dog = dogArray.find(item => item.id === numericId);
  return dog || false;
}

function updateDog(id, updatedData) {
  const dog = getDogById(id);
  if (dog) {
    if (updatedData.name) {
      dog.name = updatedData.name;
    }
    if (updatedData.weight !== undefined) {
      dog.weight = updatedData.weight;
    }
    return dog;
  }
  return false;
}

function deleteDog(id) {
  const numericId = Number(id);
  const initialLength = dogArray.length;
  dogArray = dogArray.filter(dog => dog.id !== numericId);
  return dogArray.length < initialLength;
}

module.exports = {
  getAllDogs,
  createDog,
  getDogById,
  updateDog,
  deleteDog
};
