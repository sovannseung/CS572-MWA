const express = require('express');
const router = express.Router();

router.get('/',function(req, res){
    res.end('Hello from index page');
});

module.exports = router;