const mongoose = require('mongoose')
const { Schema } = mongoose;

const counterSchema = new Schema({
    counter: Number
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
        await counterModel.updateOne({ _id: counter.id }, counter.toDoc());
    }
}

module.exports = { CounterRepo };