import {Router} from 'express';
import {getCity, getCities, createCity, createCities} from '../controllers/citiesController.js'


const citiesRouter = Router()
citiesRouter.get('/', getCities)
citiesRouter.get('/:id', getCity)
citiesRouter.post('/', createCity)
citiesRouter.post('/all', createCities)

export default citiesRouter
