const mongoose = require('mongoose');

const FriesSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true,
        enum:['Small', 'Medium', 'Large']
    }
});

const Fries = mongoose.model('Fries', FriesSchema);

module.exports = Fries;

/*
bodys prueba
{
    "name": "Papas Grandes",
    "price": "200",
    "size": "Large"
}

{
    "name": "Papas Medianas",
    "price": "100",
    "size": "Medium"
}

{
    "name": "Papas Chicas",
    "price": "50",
    "size": "Small"
}

*/