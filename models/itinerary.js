import mongoose from "mongoose";


const itinerarySchema = new mongoose.Schema({

    description: { type: String, required: true },
    price: { type: Number, required: true },
    tags: [{ type: String, required: true }],
    likes: { type: Number, required: true },
    activities: [{ type: String, required: true }],
    comments: [{ type: String, required: true }],
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' }



})

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export default Itinerary