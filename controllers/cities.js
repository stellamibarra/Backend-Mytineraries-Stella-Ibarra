import City from "../models/city.js";

export  const getCities = async   (req, res) => {
        //populate para traer los itinerarios
       try {
        const cities = await City.find().populate('itinerary')
        res.json(cities)
       } catch (error) {
              res.status(500).json({ message: error })        
       } 
    }
    
export const getCity = async (req, res) => {
    try {
        const city = await City.findById(req.params.id)
        .populate('itinerary')
        res.json(city)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}


export const createCity = async (req, res) => {

    const city = req.body
    const newCity = new City(city)
    try {
        await newCity.save()
        res.status(201).json(newCity)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateCity = async (req, res) => {
    
    const city = req.body
    const updatedCity = new City(city)
    try {
        await Cities.findByIdAndUpdate(req.params.id, updatedCity)
        res.status(201).json(updatedCity)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const deleteCity = async (req, res) => {
    try {
        await Cities.findByIdAndDelete(req.params.id)
        res.status(201).json('City deleted')
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const createCities = async (req, res) => {
    const cities = req.body; 
    try {
      const newCities = await Promise.all(cities.map(async (city) => {
        const newCity = new City(city);
        await newCity.save();
        return newCity;
      }));
  
      res.status(201).json(newCities);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  





