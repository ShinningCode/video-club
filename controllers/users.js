const express = require('express');
/* GET users listing. */

function list(req,res,next){
  res.send('respond with a list');
};

function index(req,res,next){
  res.send(`respond with a index= ${req.params.id}`);
};

function create(req, res, next){
    let name = req.body.name;
    let lastName = req.body.lastName;
  res.send(`respond with a create name= ${name} and lastname ${lastName}`);
};

function replace(req,res,next){
  res.send(`respond with list = ${req.params.id}`);
};

function update(req,res,next){
  res.send(`respond with update = ${req.params.id}`);
};

function destroy(req,res,next){
  res.send(`respond with destroy = ${req.params.id}`);
};

module.exports = {list, index, create, replace, update, destroy};
