const { getTimeNow } = require('../controller');

const router = require('express').Router();

module.exports = router;

router.get('/', getTimeNow)