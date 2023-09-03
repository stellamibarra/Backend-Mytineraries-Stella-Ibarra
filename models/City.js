import mongoose from "mongoose"

const citieSchema = new Schema({

    name: { type: String, required: true },
    country: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    itinerary: [{ type: Schema.Types.ObjectId, ref: 'Itinerary',required: true }]
})   

const City = mongoose.model('City', citieSchema)



export default City