const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    burger: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Burger',
        required: true,
    }],
    fries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Fries',
        required: true,
    }]
});

const Menu = mongoose.model('Menu', MenuSchema);

module.exports = Menu;

/*
{
    "name": "Combo Extra Mega Big Bacon Grande",
    "price": "1100",
    "burger": "634cbd2de5740433f562325c",
    "fries": "634cb6d22778e13c5829cf95"
}

{
    "name": "Combo La clasica chica",
    "price": "825",
    "burger": "634caabbe57d739001be6fdc",
    "fries": "634cb6e72778e13c5829cf99"
}

{
    "name": "Combo Extra Mega Big Bacon Mediano",
    "price": "1050",
    "burger": "634cbd2de5740433f562325c",
    "fries": "634cb6e52778e13c5829cf97"
}

{
    "name": "Combo La pobre con queso mediano",
    "price": "550",
    "burger": "634caa95e57d739001be6fda",
    "fries": "634cb6e52778e13c5829cf97"
}
*/