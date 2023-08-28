import { Router } from "express";
import {
    getItinerary,
    getItineraries,
    createItinerary,
    updateItinerary,
    deleteItinerary,
    createAllItinerary,
} from "../controllers/itineraryController.js";


const itineraryRouter = Router();

itineraryRouter.get("/", getItineraries);

itineraryRouter.get("/:id", getItinerary);
itineraryRouter.post("/", createItinerary);
itineraryRouter.post("/all", createAllItinerary);
itineraryRouter.put("/:id", updateItinerary);
itineraryRouter.delete("/:id", deleteItinerary);

export default itineraryRouter;