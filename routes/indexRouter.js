import {Router} from 'express';
import cities from './citiesRouter.js'
import itinerary from './itinerariesRouter.js'


const indexRouter = Router()


indexRouter.use('/cities', cities) 
indexRouter.use('/itinerary', itinerary)



export default indexRouter