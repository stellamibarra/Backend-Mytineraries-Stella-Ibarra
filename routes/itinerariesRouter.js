import { Router } from "express";
import { getItinerary, createItinerary, getOneItinerary } from "../controllers/itinerariesController.js";
const itinerariesRouter = Router();

itinerariesRouter.get("/",getItinerary);
itinerariesRouter.post("/",createItinerary);
itinerariesRouter.get("/:id",getOneItinerary);

export default itinerariesRouter;