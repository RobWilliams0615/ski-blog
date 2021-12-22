const { Router } = require('express');
const controller = require('../controllers/index.js');
const router = Router();

router.get('/', (req, res) => res.send('This is root!'));
router.get('/getalltrails', controller.getAllTrails);
router.post('/createtrails', controller.createTrail);
router.put('/updatetrails/:id', controller.updateTrail);
router.delete('/getalltrails/:id', controller.deleteTrail);
router.get('/getalltrails/:id', controller.getTrailById);
router.get('/getallposts', controller.getAllPosts);
router.post('/createposts', controller.createPost);

module.exports = router;
