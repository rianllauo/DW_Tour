import express from "express";
import {
   createTrip,
   deleteTrip,
   getTripById,
   getTrips,
   updateTrip,
} from "../controllers/Trips.js";

import { verifyToken } from "../middleware/verifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/trips", verifyToken, getTrips);
router.get("/trip/:id", verifyToken, getTripById);
router.post("/trip", createTrip);
router.patch("/trip/:id", updateTrip);
router.delete("/trip/:id", deleteTrip);

export default router;
