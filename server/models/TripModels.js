import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Trips = db.define(
   "trips",
   {
      title: {
         type: DataTypes.STRING,
      },
      countryId: {
         type: DataTypes.INTEGER,
      },
      accomodation: {
         type: DataTypes.STRING,
      },
      transportation: {
         type: DataTypes.STRING,
      },
      eat: {
         type: DataTypes.STRING,
      },
      day: {
         type: DataTypes.INTEGER,
      },
      night: {
         type: DataTypes.INTEGER,
      },
      dateTrip: {
         type: DataTypes.DATE,
      },
      price: {
         type: DataTypes.INTEGER,
      },
      quota: {
         type: DataTypes.INTEGER,
      },
      description: {
         type: DataTypes.STRING,
      },
      userId: {
         type: DataTypes.INTEGER,
      },
   },
   {
      freezeTableName: true,
   }
);

export default Trips;
