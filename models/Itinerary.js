import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: false },
    img: { type: String, required: false },
    user: { type: String, required: false },
    price: { type: Number, required: false },
    hashtags: { type: Array, required: false },
    comments: { type: Array, required: false },
    likes: { type: Number, required: false },
    activities: { type: Array, required: false },
    Cities:{type: mongoose.Types.ObjectId, ref: "City"}
});


const Itinerary = mongoose.model("Itinerary", itinerarySchema);
export default Itinerary;