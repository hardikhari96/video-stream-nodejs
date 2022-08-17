const express = require('express');
const streamRouter = express.Router();
const streamController = require('./stream.controller');

streamRouter.get('/video',streamController.getVideo);
streamRouter.get('/',streamController.displayHtml);

module.exports = streamRouter;
