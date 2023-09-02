import mongoose from "mongoose";
var Schema = mongoose.Schema;

const citieSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    itinerary: { type:Schema.Types.ObjectId, ref: 'Itinerary'}

})   
const City = mongoose.model('City', citieSchema)

export default City