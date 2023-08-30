import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
 
    name: { type: String, required: true },
    img: { type: String, required: true },
    description: { type: String, required: true },
    itinerary: { type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' },
  

})
const User = mongoose.model('User', userSchema)

export default User