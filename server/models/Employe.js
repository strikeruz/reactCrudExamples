const {Schema, model, ObjectId} = require('mongoose')

const Employe = new Schema({
    first_name: {type: String, required: true},
    last_name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    salary: {type: String, required: true},
    created: {type: Date, default: Date.now()}
})

module.exports = model('Employe', Employe)