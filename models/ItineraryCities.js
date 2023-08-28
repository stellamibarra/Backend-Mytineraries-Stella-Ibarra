import mongoose from "mongoose";


const itinerarySchema = new mongoose.Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    ItineraryCities: { type: mongoose.Schema.Types.ObjectId, ref: 'ItineraryCities' },




    duration: { type: number },
    price: { type: number },
    tags: [{ type: String, required: true }],

    likes: { type: number },
    activities: [{ type: String, required: true }],


})

const City = mongoose.model('ItineraryCities', itinerarySchema)

export default ItineraryCities