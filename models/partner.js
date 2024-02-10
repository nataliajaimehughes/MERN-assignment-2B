// TASK 1: Create a Schema and Model for Partners
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// TODO: Create the Schema for Partner
// Use the sample document to create the Schema:
const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        default: false
    },
    description: {
        type: String,
        required: true
    },
 }, {
    timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema)

module.exports = Partner

// TODO: Create the Model from the above Schema
// TODO: Export the Model