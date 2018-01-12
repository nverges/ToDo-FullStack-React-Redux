const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const ToDoList = require('../models/ToDoList');

module.exports = function(router) {

    
    router.get('/api/todolist', function (req, res) {
        ToDoList.find({}).sort([
            ["name", "descending"]
        ]).limit(10).exec(function(err, doc) {
            if (err) {
                console.log(err)
            } else {
                res.send(doc);
            }
        });
    });
    
    router.post('/api/todolist', function (req,res) {
        ToDoList.create(req.body, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.send("Saved Search");
            }
        });
    });
    
    router.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../public/index.html'));
    });

};