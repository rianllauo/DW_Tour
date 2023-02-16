import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Trips from "./TripModels.js";

const { DataTypes } = Sequelize;

const Countries = db.define(
   "countries",
   {
      name: {
         type: DataTypes.STRING,
      },
   },
   {
      freezeTableName: true,
   }
);

// // country -> trip
// Trips.hasOne(Countries);
// Countries.belongsTo(Trips, { foreignKey: "countryId" });

export default Countries;
