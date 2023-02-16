import Country from "../models/CountryModels.js";

export const getCountry = async (req, res) => {
   try {
      const response = await Country.findAll({
         attributes: ["id", "name"],
      });
      res.status(200).json(response);
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};

export const getCountryById = async (req, res) => {
   try {
      const response = await Country.findOne({
         attributes: ["id", "name"],
         where: {
            id: req.params.id,
         },
      });
      if (!response) return res.status(404).json({ msg: "country not found" });
      res.status(200).json(response);
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};

export const createCountry = async (req, res) => {
   const { name } = req.body;
   try {
      await Country.create({
         name: name,
      });
      res.status(201).json({ msg: "Country created successfully" });
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};

export const updateCountry = async (req, res) => {
   const country = await Country.findOne({
      where: { id: req.params.id },
   });
   if (!country) return res.status(404).json({ msg: "country not found" });

   const { name } = req.body;

   try {
      await Country.update(
         {
            name: name,
         },
         {
            where: {
               id: country.id,
            },
         }
      );
      res.status(201).json({ msg: "country updated" });
   } catch (error) {
      res.status(400).json({ msg: error.message });
   }
};

export const deleteCountry = async (req, res) => {
   const country = await Country.findOne({
      where: { id: req.params.id },
   });
   if (!country) return res.status(404).json({ msg: "Country not found" });

   try {
      await Country.destroy({
         where: {
            id: country.id,
         },
      });
      res.status(201).json({ msg: "country deleted" });
   } catch (error) {
      res.status(400).json({ msg: error.message });
   }
};
