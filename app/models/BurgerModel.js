const mongoose = require('mongoose');

const BurgerSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        bread:{
            type: Boolean,
            required: true,
        },
        burgers: {
            type:Number,
            required: true
        },
        lettuce:{
            type: Boolean,
            required: true,
        },
        tomato:{
            type: Boolean,
            required: true,
        },
        cheese:{
            type: Boolean,
            required: true,
        },
        bacon:{
            type: Boolean,
            required: true,
        },
        sauce: {
            type: String,
            required: true,
            enum:['Mayo', 'Ketchup', 'Thousand Island']
        }

    },
});

const Burger = mongoose.model('Burger', BurgerSchema);

module.exports = Burger;

/* bodys prueba
{
  "name": "Extra Mega Big Bacon",
  "price": "1000",
  "ingredients": {
      "bread": true,
      "burgers": 5,
      "lettuce": true,
      "tomato": true,
      "cheese": true,
      "bacon": true,
      "sauce": "Thousand Island"
  }
}

{
  "name": "La pobre y aburrida burger con queso",
  "price": "500",
  "ingredients": {
      "bread": true,
      "burgers": 1,
      "lettuce": false,
      "tomato": false,
      "cheese": true,
      "bacon": false,
      "sauce": "Ketchup"
  }
}

{
  "name": "La clasica que nunca falla",
  "price": "800",
  "ingredients": {
      "bread": true,
      "burgers": 2,
      "lettuce": true,
      "tomato": true,
      "cheese": true,
      "bacon": false,
      "sauce": "Mayo"
  }
}


*/