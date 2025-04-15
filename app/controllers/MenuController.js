const Menu = require('../models/MenuModel');

async function listall(req, res) {
    await Menu.find({}).populate({path: 'burger'})
        .then(menus => {
            if(menus.length) return res.status(200).send({menus})
            return res.status(204).send({message: 'No Content'});
        }).catch(err => res.status(500).send({err}))
}

function create(req, res) {
    let menu = new Menu(req.body);
    menu.save()
        .then(menu => 
            res.status(201).send({menu})
        ).catch(err => res.status(500).send({err}))
}

module.exports = {
    listall,
    create,
}