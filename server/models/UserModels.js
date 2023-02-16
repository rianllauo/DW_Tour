import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Users = db.define(
   "users",
   {
      name: {
         type: DataTypes.STRING,
      },
      email: {
         type: DataTypes.STRING,
      },
      password: {
         type: DataTypes.STRING,
      },
      phone: {
         type: DataTypes.INTEGER,
      },
      address: {
         type: DataTypes.STRING,
      },
      role: {
         type: DataTypes.STRING,
      },
      avatar: {
         type: DataTypes.STRING,
      },
      refresh_token: {
         type: DataTypes.TEXT,
      },
   },
   {
      freezeTableName: true,
   }
);

export default Users;
