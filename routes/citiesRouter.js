import {Router} from 'express';
import {getCity, getCities, createCity, updateCity, deleteCity,createAllCities} from '../controllers/citiesController.js'
const citiesRouter = Router()

citiesRouter.get('/', getCities)
citiesRouter.get('/:id', getCity)
citiesRouter.post('/', createCity)
citiesRouter.put('/:id', updateCity)
citiesRouter.delete('/:id', deleteCity)
citiesRouter.post('/all',createAllCities)

export default citiesRouter
