const db = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const dbModel = await db.Book.create(req.body);
      res.status(201).json(dbModel);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const dbModel = await db.Book.find({});
      res.status(422).json(dbModel);
    } catch (error) {
      res.status(422).json(error);
    }
  },
};
