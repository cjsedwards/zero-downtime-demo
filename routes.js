const express = require('express');

const router = express.Router();

router.post("/count", function(req, res) {
    res.json({count: 12323});
});

module.exports = router;