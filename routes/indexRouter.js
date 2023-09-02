import {Router} from 'express';
import cities from './citiesRouter.js'
import itineraries from './itinerariesRouter.js'

const indexRouter = Router()
indexRouter.use('/cities', cities)  
indexRouter.use('/itineraries', itineraries)

export default indexRouter