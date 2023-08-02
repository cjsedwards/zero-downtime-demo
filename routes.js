const express = require('express');
const { CounterRepo } = require('./repos/counter_repo');

const router = express.Router();

router.post("/increment-counter", async (req, res) => {
    try{
        console.log(req.headers.host)
        const counter = await CounterRepo.find()
        counter.increment()
        await CounterRepo.save(counter)

        res.json({ counter: counter.count });
    } catch(e) {
        console.log(e)
        console.log(e.stack)
        res.status(500);
    }
});

module.exports = router;