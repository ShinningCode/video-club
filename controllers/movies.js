//controllers/movies.js
//Last update 15/03/23
const express = require('express');
const {Movie} = require('../db');

function list(req, res, next) {
    Movie.findAll({include:['genre', 'director', 'actors']})
            .then(objects => res.json(objects))
            .catch(err => res.send(err));
}

function index(req, res, next){
    res.send(`respond with a index= ${req.params.id}`);
}

function create(req, res, next) {
    const title = req.body.title;
    const genereId = req.body.genereId;
    const directorId = req.body.directorId;
    

    let movie = new Object({
        title:title,
        genereId:genereId,
        directorId:directorId
     });

    Movie.create(movie)
            .then(obj => res.json(obj))
            .catch(err => res.send(err));
}
function addActor(req, res, next){
    const idMovie = req.body.idMovie;
    const idActor = req.body.idActor;
}
 

function replace(req, res, next) {
    res.send(`respond with a replace = ${req.params.id}`);
}

function update(req, res, next) {
    res.send(`respond with a update = ${req.params.id}`);
    
}

function destroy(req, res, next) {
    res.send(`respond with a destroy = ${req.params.id}`);
}

module.exports = {list, index, create, replace, update, destroy};