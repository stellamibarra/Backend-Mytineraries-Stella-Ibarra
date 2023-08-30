import { Router } from "express";
import {
    getItinerary,
    getItineraries,
    createItinerary,
    updateItinerary,
    deleteItinerary,
    createAllItinerary,
} from "../controllers/itinerary.js";


const itinerariesRouter = Router();

itinerariesRouter.get("/itinerary", getItineraries);
itinerariesRouter.get("/itinerary/:id", getItinerary);
itinerariesRouter.post("/itinerary/", createItinerary);
itinerariesRouter.post("/itinerary/all", createAllItinerary);
itinerariesRouter.put("/itinerary/:id", updateItinerary);
itinerariesRouter.delete("/itinerary/:id", deleteItinerary);

export default itinerariesRouter;