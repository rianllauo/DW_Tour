import { Sequelize } from "sequelize";

const db = new Sequelize("dewe_tour", "root", "", {
   host: "localhost",
   dialect: "mysql",
});

export default db;
