import {Router} from 'express';

import {getItineraries, getItinerary, createItinerary, updateItinerary, deleteItinerary} from '../controllers/itineraryControllers.js'
const itinerariesRouter = Router()

itinerariesRouter.get('/', getItineraries)
itinerariesRouter.get('/:id', getItinerary)
itinerariesRouter.post('/', createItinerary)
itinerariesRouter.put('/:id', updateItinerary)
itinerariesRouter.delete('/:id', deleteItinerary)

export default itinerariesRouter
