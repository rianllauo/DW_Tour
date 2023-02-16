import Trips from "../models/TripModels.js";
import Users from "../models/UserModels.js";
import Countries from "../models/CountryModels.js";

export const getTrips = async (req, res) => {
   try {
      const response = await Trips.findAll({
         attributes: [
            "id",
            "title",
            "accomodation",
            "transportation",
            "eat",
            "day",
            "night",
            "dateTrip",
            "price",
            "quota",
            "description",
         ],
         include: [
            {
               model: Countries,
               attributes: ["id", "name"],
            },
            {
               model: Users,
               attributes: ["id", "name", "email", "phone", "address"],
            },
         ],
      });
      res.status(200).json(response);
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};

export const getTripById = async (req, res) => {
   try {
      const response = await Trips.findOne({
         // attributes: ["id", "name"],
         include: [
            {
               model: Countries,
               attributes: ["id", "name"],
            },
            {
               model: Users,
               attributes: ["id", "name", "email", "phone", "address"],
            },
         ],
         where: {
            id: req.params.id,
         },
      });
      if (!response) return res.status(404).json({ msg: "trip not found" });
      res.status(200).json(response);
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};

export const createTrip = async (req, res) => {
   const {
      title,
      accomodation,
      transportation,
      eat,
      day,
      night,
      dateTrip,
      price,
      quota,
      description,
      countryId,
      userId,
   } = req.body;
   try {
      await Trips.create({
         title,
         accomodation,
         transportation,
         eat,
         day,
         night,
         dateTrip,
         price,
         quota,
         description,
         countryId,
         userId,
      });
      res.status(201).json({ msg: "trip created successfully" });
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};

export const updateTrip = async (req, res) => {
   const trip = await Trips.findOne({
      where: { id: req.params.id },
   });
   if (!trip) return res.status(404).json({ msg: "trip not found" });

   const {
      title,
      accomodation,
      transportation,
      eat,
      day,
      night,
      dateTrip,
      price,
      quota,
      description,
      countryId,
      userId,
   } = req.body;

   try {
      await Trips.update(
         {
            title,
            accomodation,
            transportation,
            eat,
            day,
            night,
            dateTrip,
            price,
            quota,
            description,
            // countryId,
            // userId,
         },
         {
            where: {
               id: trip.id,
            },
         }
      );
      res.status(201).json({ msg: "trip updated" });
   } catch (error) {
      res.status(400).json({ msg: error.message });
   }
};

export const deleteTrip = async (req, res) => {
   const trip = await Trips.findOne({
      where: { id: req.params.id },
   });
   if (!trip) return res.status(404).json({ msg: "trip not found" });

   try {
      await Trips.destroy({
         where: {
            id: trip.id,
         },
      });
      res.status(201).json({ msg: "trip deleted" });
   } catch (error) {
      res.status(400).json({ msg: error.message });
   }
};
