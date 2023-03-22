//controllers/directors.js
//Last update 08/03/23

const express = require('express');
const {Copy} = require('../db');

function list(req, res, next) {
    Copy.findAll()
            .then(objects => res.json(objects))
            .catch(err => res.send(error));
}

function index(req, res, next){
    res.send(`respond with a index= ${req.params.id}`);
}

function create(req, res, next) {
    let number = req.body.number;
    let format = req.body.format;
    let estatus = teq.body.estatus;
    

    let copy = new Object({
        number:number,
        format:format,
        estatus:estatus
        
        
    });
    
    Copy.create(copy)
            .then(obj => res.json(obj))
            .catch(err => res.json(err));
}

function replace(req, res, next) {
    const id = req.params.id;
    Copy.findByPk(id)
            .then((object)=>{
                const number = req.body.number ? req.body.number: object.number; 
                const estatus = req.body.estatus ? req.body.estatus: false;
                const format = req.body.format ? req.body.format: "";
                object.update({format:format, estatus:estatus, number:number})
                        .then(obj => res.json(obj))
                        .catch(err => res.send(err));
    })
            .catch(err => res.send(err));
}

function update(req, res, next) {
    const id = req.params.id;
    Copy.findByPk(id)
            .then((object)=>{
                const number = req.body.number ? req.body.number: object.number; 
                const estatus = req.body.estatus ? req.body.estatus: false;
                const format = req.body.format ? req.body.format: "";
                object.update({format:format, estatus:estatus, number:number})
                        .then(obj => res.json(obj))
                        .catch(err => res.send(err));
    })
            .catch(err => res.send(err));
    
}

function destroy(req, res, next) {
    const id = req.params.id;
    Genre.destroy({where:{id:id}}).then().catch();
}

module.exports = {list, index, create, replace, update, destroy};


