import express from "express";
import {
   createCountry,
   deleteCountry,
   getCountry,
   getCountryById,
   updateCountry,
} from "../controllers/Country.js";
// import { verifyToken } from "../middleware/verifyToken.js";
// import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get("/countries", getCountry);
router.get("/country/:id", getCountryById);
router.post("/country", createCountry);
router.patch("/country/:id", updateCountry);
router.delete("/country/:id", deleteCountry);

export default router;
