import Itinerary from '../models/Itinerary'

export const getItineraries = async (req, res) => {
    try {
        const itineraries = await Itinerary.find(req.params)
        res.json(itineraries)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getItinerary = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id)
        res.json(itinerary)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const createItinerary = async (req, res) => {

    const itinerary = req.body
    const newItinerary = new Itinerary(itinerary)
    try {
        await newItinerary.save()
        res.status(201).json(newItinerary)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateItinerary = async (req, res) => {
    
    const itinerary = req.body
    const updatedItinerary = new Itinerary(itinerary)
    try {
        await Itinerary.findByIdAndUpdate(req.params.id, updatedItinerary)
        res.status(201).json(updatedItinerary)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
export const deleteItinerary = async (req, res) => {
    try {
        await Itinerary.findByIdAndDelete(req.params.id)
        res.status(201).json('Itinerary deleted')
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

