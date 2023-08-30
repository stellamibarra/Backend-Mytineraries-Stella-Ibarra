import {Router} from 'express';
import cities from './cities.js'
import itineraries from './itineraries.js'
import user from './user.js'

//tener un router/index.js  
// nos da posibilidad de tener un solo punto de entrada a las rutas
// y nos permite tener un codigo mas limpio
// y colocar middleware en un solo lugar
// y tener un solo lugar para manejar errores

const indexRouter = Router()
//middleware
    // indexRouter.use((req, res, next) => {
    //     if(error.status = 404){
    //         return res.status(404).json({message: 'not found'})
    //     }
    //     next()
    // })
//routes
indexRouter.use('/cities', cities) 
indexRouter.use('/itineraries', itineraries)
indexRouter.use('/user', user)



export default indexRouter