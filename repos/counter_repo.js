const mongoose = require('mongoose')
const { Schema } = mongoose;

const counterSchema = new Schema({
    counter: {
        value: Number
    }
});

const { Counter } = require('../model/counter');


const counterModel = mongoose.model('counter', counterSchema);

class CounterRepo {
    static async find() {
        let doc = await counterModel.findOne({});
        if(!doc) {
            const counter = Counter.Zero()
            const result = await counterModel.updateOne({}, counter.toDoc(), { upsert: true });
            doc = await counterModel.findOne({_id: result.upsertedId})
        }
        return Counter.fromDoc(doc);
    }

    static async save(counter) {
        const doc = await counterModel.findById(counter.id);
        doc.counter = counter.toDoc().counter
        await doc.save();
    }
}

module.exports = { CounterRepo };