import Users from "./UserModels.js";
import Countries from "./CountryModels.js";
import Trips from "./TripModels.js";
import Transactions from "./TransactionModels.js";

Users.hasMany(Trips);
Trips.belongsTo(Users, { foreignKey: "userId" });

Countries.hasMany(Trips);
Trips.belongsTo(Countries, { foreignKey: "countryId" });

Users.hasMany(Transactions);
Transactions.belongsTo(Users, { foreignKey: "userId" });

Trips.hasMany(Transactions);
Transactions.belongsTo(Trips, { foreignKey: "tripId" });

export { Users, Trips, Countries, Transactions };
