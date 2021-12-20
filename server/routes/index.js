const { Router } = require('express');
const controller = require('../controllers/index.js');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.get('/getalltrails', controller.getAllTrails);
router.get('/trails', controller.createTrail);
router.get('/trails/:id', controller.updateTrail);
router.get('/trails/:id', controller.deleteTrail);

module.exports = router;
