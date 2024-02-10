// TASK 2: Create a Schema and Model for Promotions
const mongoose = require('mongoose')
const Schema = mongoose.Schema

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

// TODO: Create the Schema for Promotion
// Use the sample document to create the Schema:
const promotionSchema = new Schema({
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
    cost: {
        type: Currency,
        required: true,
        min: 0
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const Promotion = mongoose.model('Promotion', promotionSchema)

module.exports = Promotion


// TODO: Create the Model from the above Schema
// TODO: Export the Model