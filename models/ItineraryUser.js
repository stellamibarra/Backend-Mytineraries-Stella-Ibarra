import mongoose from 'mongoose';

const itineraryUserSchema = new mongoose.Schema({
 
   
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    itinerary:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }],

})
const ItineraryUser = mongoose.model('ItineraryUser', itineraryUserSchema)

export default ItineraryUser