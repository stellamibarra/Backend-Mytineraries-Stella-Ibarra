import itinerary from "../models/itinerary.js";



export const getItineraries = async (req, res) => {
    //obtener todos los itinerarios
  try {
    const itinerary = await itinerary.find(req.params);
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
export const getItinerary = async (req, res) => {
    //obtener un itinerario por id
  try {
    const itinerary = await itinerary.findById(req.params.id);
    res.json(itinerary);
  } catch (error) {
    res.status(500).json({ message: error });
  }
}
export const createItinerary = async (req, res) => {
    //crear un itinerario
  const itinerary = req.body;
  const newItinerary = new itinerary(itinerary);
  try {
    await newItinerary.save();
    res.status(201).json(newItinerary);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
export const updateItinerary = async (req, res) => {
    //actualizar un itinerario
  const itinerary = req.body;
  const updatedItinerary = new itinerary(itinerary);
  try {
    await itinerary.findByIdAndUpdate(req.params.id, updatedItinerary);
    res.status(201).json(updatedItinerary);
  } catch (error) {
    res.status(409).json({ message: error.message });

  }
}
export const deleteItinerary = async (req, res) => {
    //borrar un itinerario
  try {
    await itinerary.findByIdAndDelete(req.params.id);
    res.status(201).json('Itinerary deleted');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
export const createAllItinerary = async (req, res) => {
    //crear todos los itinerarios
  const itineraries = req.body;
  try {
    await itinerary.insertMany(itineraries);
    res.status(201).json('Itineraries created');
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}
