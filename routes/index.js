const { Router } = require('express');
const controller = require('../controllers/index');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.get('/getalltrails', controller.getAllTrails);
router.get('/createtrail', controller.createTrail);
router.get('/updatetrail', controller.updateTrail);
router.get('/deletetrail', controller.deleteTrail);

module.exports = router;
