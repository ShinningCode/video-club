//controllers/directors.js
//Last update 15/03/23
const express = require('express');
const { Book } = require('../db');

function list(req, res, next) {
    Book.findAll({include:['movies']})
            .then(objects => res.json(objects))
            .catch(err => res.send(err));
}

function index(req, res, next){
    const id = req.params.id;
    Book.findByPk(id)
         .then(object => res.json(object))
         .catch(err => res.body.send(err));
}

function create(req, res, next) {
    let date = req.body.date;

    let book = new Object({
        date:date
        
    });
    
    Book.create(book)
            .then(obj => res.json(obj))
            .catch(err => res.json(err));
}

function replace(req, res, next) {
    const id = req.params.id;
    Book.findByPk(id)
            .then((object)=>{
                const date = req.body.date ? req.body.date: "";
                object.update({name:name, lastName:lastName})
                        .then(obj => res.json(obj))
                        .catch(err => res.send(err));
    })
            .catch(err => res.send(err));
}

function update(req, res, next) {
    const id = req.params.id;
    Book.findByPk(id)
            .then((object)=>{
              const date = req.body.date ? req.body.date : "";
              object.update({date:date})
                    .then(obj => res.json(obj))
                    .catch(err => res.send(err));
            })
            .catch(err => res.send(err));
    
};8

function destroy(req, res, next) {
    const id = req.params.id;
    Book.destroy({ where:{ id:id } })
            .then(obj => res.json(obj))
            .catch(err => res.send(err));
}

module.exports = {list, index, create, replace, update, destroy};
//15/03/23