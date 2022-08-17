const express = require('express');
const router = express();
const streamModule = require('./modules/stream/stream.routes');

router.use('/stream',streamModule);

module.exports = router;
