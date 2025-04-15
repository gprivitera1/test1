const Fries = require('../models/FriesModel');

function listall(req, res) {
    Fries.find({})
        .then(friess => {
            if(friess.length) return res.status(200).send({friess})
            return res.status(204).send({message: 'No Content'});
        }).catch(err => res.status(500).send({err}))
}

function create(req, res) {
    let fries = new Fries(req.body);
    fries.save()
        .then(fries => 
            res.status(201).send({fries})
        ).catch(err => res.status(500).send({err}))
    
}

function show(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.friess) return res.status(404).send({message: 'Not Found'});
    let friess = req.body.friess;
    return res.status(200).send({friess});
}

function update(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.friess) return res.status(404).send({message: 'Not Found'});
    let fries = req.body.friess[0];
    fries = Object.assign(fries, req.body);
    fries.save()
        .then(fries => res.status(200).send({message: 'Fries Updated', fries})
    ).catch(err => res.status(500).send({err}))
}

function deleted(req, res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.friess) return res.status(404).send({message: 'Not Found'});
    req.body.friess[0].remove()
        .then(fries => {
            res.status(200).send({message:'Fries removed', fries})
        }
        ).catch(err => res.status(500).send({err}));
}

function find(req, res, next){
    let query = {};
    query[req.params.key] = req.params.value
    Fries.find(query).then(friess => {
        if(!friess.length) return next();
        req.body.friess = friess;
        return next();
    }).catch(err =>{
        req.body.error = err;
        next();
    })
}

module.exports = {
    listall,
    show,
    create,
    update,
    deleted,
    find,
}