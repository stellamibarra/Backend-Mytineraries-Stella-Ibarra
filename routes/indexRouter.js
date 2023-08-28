import {Router} from 'express';
import cities from './citiesRouter.js'
import itineraries from './itinerariesRouter.js'
import user from './userRouter.js'


const indexRouter = Router()
indexRouter.use('/cities', cities) 
indexRouter.use('/itineraries', itineraries)
indexRouter.use('/user', user)

export default indexRouter