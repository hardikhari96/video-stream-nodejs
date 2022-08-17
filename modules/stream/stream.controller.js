const fs = require('fs');
const path = require('path');
const streamService = require('./stream.service');

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
exports.getVideo = function (req, res, next) {
    const range = req.headers.range;
    if (!range) {
        return res.status(400).send("Not Valid Url");
    }
    const streamData = streamService.streamVideo(range);
    res.writeHead(206, streamData.headers);
    streamData.stream.pipe(res);
}
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns 
 */
exports.displayHtml = function (req, res, next) {
    res.sendFile(path.join(__dirname,'../../static/video.html'));
}