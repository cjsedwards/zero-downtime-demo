const express = require('express');
const { CounterRepo } = require('./repos/counter_repo');

const router = express.Router();

router.post("/count", async (req, res) => {
    try{
        const counter = await CounterRepo.find()
        counter.increment()
        await CounterRepo.save(counter)

        res.json({ count: counter.currentValue });
    } catch(e) {
        res.status(500);
    }
});

module.exports = router;