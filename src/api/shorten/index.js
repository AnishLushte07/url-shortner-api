const express = require('express');
const controller = require('./shorten.controller');

const router = express.Router();

router.get('/:hash', controller.index);

router.post('/shorten', controller.create);

module.exports = router;
