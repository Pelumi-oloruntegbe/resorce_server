const mongoose = require('mongoose');
const Schema = mongoose.Schema


const resourceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        trim: true
    },
}, { timestamps: true }
);


module.exports = mongoose.model("Resource", resourceSchema);