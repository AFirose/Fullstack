// routes/dogRouter.js
// Router layer: maps endpoints to controller functions

const express = require("express");
const router = express.Router();

const {
  getAllDogs,
  getDogById,
  createDog,
  updateDog,
  deleteDog
} = require("../controllers/dogControllers");

router.get("/", getAllDogs);
router.post("/", createDog);
router.get("/:dogId", getDogById);
router.put("/:dogId", updateDog);
router.delete("/:dogId", deleteDog);

module.exports = router;
