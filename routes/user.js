import { Router } from 'express';
import {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    createUsers
} from '../controllers/user.js'
const userRouter = Router()


userRouter.get('/user', getUsers)
userRouter.get('/user/:id', getUser)
userRouter.post('/user', createUser)
userRouter.put('/user/:id', updateUser)
userRouter.delete('/user/:id', deleteUser)
userRouter.post('/user/all', createUsers)

export default userRouter

