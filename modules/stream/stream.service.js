const fs = require('fs');
const path = require('path');

/**
 * 
 * @param {string} range 
 * @returns 
 */
exports.streamVideo = function (range) {
    let videoPath = path.join(__dirname, '../../uploads/new.mp4');
    let videoSize = fs.statSync(videoPath).size;

    const CHUNK_SIZE = 10 ** 6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
    const contentLength = end - start + 1;
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };
    return {
        stream: fs.createReadStream(videoPath, { start, end }),
        headers
    };
}