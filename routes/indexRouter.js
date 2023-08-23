import {Router} from 'express';
import cities from './citiesRouter.js'

const indexRouter = Router()
indexRouter.use('/cities', cities)  

export default indexRouter