const mongoose = require('mongoose')

const connectionString = process.env.DB_CONNECTION_STRING ?? 'mongodb://localhost:27017/zero-downtime-demo'
console.log(connectionString)
const mongooseOptions = {
    autoIndex: true,
}

const initDb = async () => {
    return await mongoose.connect(connectionString, mongooseOptions);
}

module.exports = {
    initDb
};