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
      res.status(200).json(dbModel);
    } catch (error) {
      res.status(422).json(error);
    }
  },
  remove: async (req, res) => {
    try {
      const dbModel = await db.Book.findById({ _id: req.params.id });
      dbModel.remove();
      res.status(200).json(dbModel);
    } catch (error) {
      res.status(422).json(error);
    }
  }
};