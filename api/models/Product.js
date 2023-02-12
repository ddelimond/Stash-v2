const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    img: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true,
        unique: true
    },

    desc: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },

    color: {
        type: Array,
        required: true
    },

    size: {
        type: Array,
        required: true
    },

    categories: {
        type: Array,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    }
},
    { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)