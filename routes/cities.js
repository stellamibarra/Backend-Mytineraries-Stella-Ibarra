import { Router } from 'express';
import {
    getCity,
    getCities,
    createCity,
    updateCity,
    deleteCity,
    createCities
} from '../controllers/cities.js'
const citiesRouter = Router()


citiesRouter.get('/', getCities)
citiesRouter.get('/:id', getCity)
citiesRouter.post('/', createCity)
citiesRouter.put('/:id', updateCity)
citiesRouter.delete('/:id', deleteCity)
citiesRouter.post('/all', createCities)

export default citiesRouter
