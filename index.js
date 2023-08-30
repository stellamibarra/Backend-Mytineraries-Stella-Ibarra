import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import './config/database.js'
import index from './routes/index.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => res.send('Hello World!'))

app.use('/api/', index)

app.listen(process.env.PORT,process.env.HOST,  () => {
    console.log(process.env.PORT)
    console.log(process.env.HOST)
    console.log('Server running at http://' + process.env.HOST + ':' + process.env.PORT);
});