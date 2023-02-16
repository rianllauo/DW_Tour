import express from "express";
import db from "./config/Database.js";

import userRoute from "./routes/userRoute.js";
import countryRoute from "./routes/countryRoute.js";
import tripRoute from "./routes/TripRoute.js";

import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
// import Users from "./models/UserModels.js";
// import Trips from "./models/TripModels.js";
// import Country from "./models/CountryModels.js";
// import Transactions from "./models/TransactionModels.js";

import { Users, Trips, Countries, Transactions } from "./models/index.js";

dotenv.config();
const app = express();

try {
   await db.authenticate();
   console.log("Databse connected...");
   await db.sync();
   await Users.sync();
   await Countries.sync();
   await Trips.sync();
   await Transactions.sync();
} catch (error) {
   console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());

// router
app.use(userRoute);
app.use(countryRoute);
app.use(tripRoute);

app.listen(5000, () => console.log("server berjalan di port 5000"));
