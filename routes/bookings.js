//routes/directors.js
////Last update 03/03/23
const express = require('express');
const router = express.Router();
const controller = require('../controllers/bookings');

/* GET users listing. */
router.get('/', controller.list);

router.get('/:id', controller.index);

router.post('/', controller.create);

router.put('/:id', controller.replace);

router.patch('/:id', controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
//15/03/23