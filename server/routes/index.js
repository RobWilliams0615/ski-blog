const { Router } = require('express');
const controller = require('../controllers/index.js');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.get('/getalltrails', controller.getAllTrails);
router.post('/createtrails', controller.createTrail);
router.put('/updatetrailstrails/:id', controller.updateTrail);
router.delete('/deletetrails/:id', controller.deleteTrail);

module.exports = router;
