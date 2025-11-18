const Tour = require('../models/tourModel.js');

const getAllTours = (req, res) => {
  res.status(200).json(Tour.getAll());
};

const createTour = (req, res) => {
  const { name, info, image, price } = req.body;
  const newTour = Tour.addOne(name, info, image, price);

  if (newTour) {
    res.status(201).json(newTour);
  } else {
    res.status(400).json({ message: "Name, info, image, and price are required" });
  }
};

const getTourById = (req, res) => {
  const tour = Tour.findById(req.params.tourId);
  if (tour) res.status(200).json(tour);
  else res.status(404).json({ message: "Tour not found" });
};

const updateTour = (req, res) => {
  const updatedTour = Tour.updateOneById(req.params.tourId, req.body);
  if (updatedTour) res.status(200).json(updatedTour);
  else res.status(404).json({ message: "Tour not found" });
};

const deleteTour = (req, res) => {
  const deleted = Tour.deleteOneById(req.params.tourId);
  if (deleted) res.status(204).send();
  else res.status(404).json({ message: "Tour not found" });
};

module.exports = {
  getAllTours,
  createTour,
  getTourById,
  updateTour,
  deleteTour,
};
