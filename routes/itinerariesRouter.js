import { Router } from "express";
import {
    getItinerary,
    getItineraries,
    createItinerary,
    updateItinerary,
    deleteItinerary,
    createAllItinerary,
} from "../controllers/itineraryController.js";


const itinerariesRouter = Router();

itinerariesRouter.get("/", getItineraries);

itinerariesRouter.get("/:id", getItinerary);
itinerariesRouter.post("/", createItinerary);
itinerariesRouter.post("/all", createAllItinerary);
itinerariesRouter.put("/:id", updateItinerary);
itinerariesRouter.delete("/:id", deleteItinerary);

export default itinerariesRouter;