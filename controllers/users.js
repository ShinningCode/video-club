const express = require('express');
/* GET users listing. */

function list(req,res,next){
  res.send('respond with resourse');
};

function index(req,res,next){
  res.send(`respond with a index= ${req.params.id}`);
};

function create(req,res,next){
    let name = req.body.name;
    let lastName = req.body.lastName;
  res.send(`respond with create = ${req.name}`);
};

function replace(req,res,next){
  res.send('respond with list');
};

function update(req,res,next){
  res.send('respond with update');
};

function destroy(req,res,next){
  res.send('respond with destroy');
};

module.exports = {list, index, create, replace, update, destroy};
