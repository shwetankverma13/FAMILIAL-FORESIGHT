const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
})

const data = mongoose.model('Data', dataSchema);

module.exports = data;