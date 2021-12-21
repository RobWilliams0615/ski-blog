const Trail = require('../models/trail');

const getAllTrails = async (req, res) => {
  try {
    const trails = await Trail.find();
    return res.status(200).json({ trails });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const createTrail = async (req, res) => {
  console.log(req.body);
  try {
    const trail = await Trail.create(req.body);
    console.log(trail);
    await trail.save();
    return res.status(201).json({ trail });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getTrailById = async (req, res) => {
  try {
    const { id } = req.params;
    const trail = await Trail.findById(id);
    if (trail) {
      return res.status(200).json({ trail });
    }
    return res.status(404).send('This trail does not exist');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateTrail = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Trail.findByIdAndUpdate(id, req.body, { new: true }, (err, trail) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!trail) {
        res.status(500).send('Trail not found');
      }
      return res.status(200).json(trail);
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
};

const deleteTrail = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Trail.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send('Trail removed');
    }
    throw new Error('Trail not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllTrails,
  createTrail,
  updateTrail,
  deleteTrail,
  getTrailById
};
