import mongoose from "mongoose";


const itinerarySchema = new mongoose.Schema({

    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    tags: [{ type: String, required: true }],

    likes: { type: Number, required: true },
    activities: [{ type: String, required: true }],
    comments: [{ type: String, required: true }],
    user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],


})

const ItineraryCities = mongoose.model('ItineraryCities', itinerarySchema)

export default ItineraryCities