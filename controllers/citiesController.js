import City from "../models/City.js";
import Itinerary from "../models/Itinerary.js";

export const getCities = async (req, res) => {

    const query = {}
    if (req.query.name) {
        query.name = { $regex: req.query.name, $options: 'i' }
    }
    if (req.query.itinerary) {
        const aux = await Itinerary.findOne({ itinerary: req.query.itinerary })
        query.itinerary = aux._id
    }
    
    try {
        const cities = await City.find(query).populate({
            path: 'itinerary',
            select: 'title img user price hashtags comments likes activities'
        })
        res.status(200).json(
            { status: 200, success: true, response: cities }
        )
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getCity = async (req, res) => {
    try {
        const city = await City.findById(req.params.id).populate(
            {
                path: 'itinerary',
                select: 'itinerary  user price hashtags comments likes activities'
            })
        res.status(200).json({ status: 200, success: true, response: city })
    } catch (error) {   
             res.status(500).json({ message: 'Error al obtener la ciudad', error: error.message });
    }
}

export const createCity = async (req, res) => {
    console.log("ciudad creada", req.body);
    try {

        const newCity = { ...req.body }

        const itinerary = await Itinerary.findOne({ itinerary: req.body.itinerary })

        if (itinerary) {
             newCity.itinerary = itinerary._id 
            }
        else {
            const newItinerary = await Itinerary.create({ itinerary: req.body.itinerary })
            newCity.itinerary = newItinerary._id
        }

        const city = await City.create(newCity)
        await Itinerary.findOneAndUpdate(
            { _id: newCity.itinerary },
            { $push: { cities: city._id } })
        res.status(201).json({ newCity: city })
    } catch (error) {
        res.status(500).json({ message: error , error: error.message})
    }
}


export const createCities = async (req, res) => {
    try {

        for (const item of req.body) {
            const { Itinerary } = item
            const newCity ={...item}
           const aux = await Itinerary.findOne({ itinerary: Itinerary })

            if (aux) {
                newCity.category = aux._id
            } else {
                const newItinerary = await Itinerary.create({ itinerary: Itinerary })
                newCity.itinerary = newItinerary._id
            }
            const city = await City.create(newCity)
            await Itinerary.findOneAndUpdate(
                { _id: newCity.itinerary },
                { $push: { cities: city._id } })
        }
        res.status(201).json({ success: true, response: 'Cities created' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}




