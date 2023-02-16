import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModels.js";
import Trips from "./TripModels.js";

const { DataTypes } = Sequelize;

const Transactions = db.define(
   "transactions",
   {
      counterQty: {
         type: DataTypes.INTEGER,
      },
      tripId: {
         type: DataTypes.INTEGER,
      },
      total: {
         type: DataTypes.INTEGER,
      },
      status: {
         type: DataTypes.STRING,
      },
      attachment: {
         type: DataTypes.STRING,
      },
      tripId: {
         type: DataTypes.INTEGER,
         references: {
            model: "trips",
            key: "id",
         },
      },
      userId: {
         type: DataTypes.INTEGER,
      },
   },
   {
      freezeTableName: true,
   }
);

// user -> trip
// Users.hasMany(Transactions);
// Transactions.belongsTo(Users, { foreignKey: "userId" });

// Trips.hasMany(Transactions);
// Transactions.belongsTo(Trips, { foreignKey: "tripId" });

export default Transactions;
