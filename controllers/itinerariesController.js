import { Itinerary } from '../models/Itinerary';

export const getItinerary = async (req, res) => {
  try {
    const itineraries = await Itinerary.find().populate({
      path: 'cities',
      select: 'name img description'
    })
    res.json(itineraries)


  } catch (error) {
    res.status(500).json({ error })
  }
}

export const createItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.create(req.body)
    res.status(201).json({ newItinerary: itinerary })
  } catch (error) {
    res.status(500).json({ error })
  }
}

export const getOneItinerary = async (req, res) => {
  try {
    const itinerary = await Itinerary.findById(req.params.id).populate({

      path: 'cities',
      select: '-itinerary'
    })
    res.status(200).json({ itinerary: itinerary })

  } catch (error) {
    res.status(500).json({ error })
  }
}


