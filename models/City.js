import mongoose from "mongoose";


const citieSchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true }

})

const City = mongoose.model('City', citieSchema)

export default City