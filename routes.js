const express = require('express');
const router = express();
const streamModule = require('./modules/stream/stream.routes');

router.use('/stream',streamModule);

router.all('/',(req,res)=>{
    return res.redirect('/stream');
})

module.exports = router;
