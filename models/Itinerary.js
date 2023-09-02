import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    img: { type: String, required: true },
    rating: { type: Number, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
    hashtags: { type: Array, required: true },
    comments: { type: Array, required: true },
    likes: { type: Number, required: true },
    activities: { type: Array, required: true },
    
})  

const Itinerary = mongoose.model('Itinerary', itinerarySchema)

export default Itinerary