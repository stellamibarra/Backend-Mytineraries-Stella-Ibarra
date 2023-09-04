import Itinerary from '../models/Itinerary'

export const getItineraries = async (_, res) => {
    try {
        const itineraries = await Itinerary.find().populate({

            path: 'cities',
            select : 'name img description'
        }
        )
        res.json(itineraries)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getItinerary = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id).populate({
                
                path: 'cities',
                select : '-itinerary'
            }
            )
        res.status(200).json({itinerary:itinerary})
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const createItinerary = async (req, res) => {
  
    try {
        const newItinerary = await Itinerary.create(req.body)
        res.status(201).json({newItinerary:newItinerary})
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}


export const updateItinerary = async (req, res) => {
    try {
        const updatedItinerary = await Itinerary.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // Esto devuelve el itinerario actualizado en lugar del anterior
        );

        if (!updatedItinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }

        res.status(200).json(updatedItinerary);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteItinerary = async (req, res) => {
    try {
        const deletedItinerary = await Itinerary.findByIdAndDelete(req.params.id);

        if (!deletedItinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }

        res.status(204).send(); // Usamos 204 para indicar que no hay contenido en la respuesta
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

