import {Router} from 'express';
import {getCity, getCities, createCity, updateCity, deleteCity,createAllCities} from '../controllers/citiesController.js'
const userRouterRouter = Router()


userRouterRouter.get('/', getCities)
userRouterRouter.get('/:id', getCity)
userRouterRouter.post('/', createCity)
userRouterRouter.put('/:id', updateCity)
userRouterRouter.delete('/:id', deleteCity)
userRouterRouter.post('/all',createAllCities)

export default userRouterRouter

