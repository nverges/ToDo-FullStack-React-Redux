const express = require('express');
const mongoose = require('mongoose');

const ToDoList = require('../models/ToDoList');

module.exports = function(router) {

    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });

    router.get('/api/todolist', (req, res) => {
        ToDoList.find({}).sort([
            ["name", "descending"]
        ]).limit(10).exec((err, doc) => {
            if (err) {
                console.log(err)
            } else {
                res.send(doc);
            }
        });
    });

    router.post('/api/todolist', (req,res) => {
        ToDoList.create(req.body, (err) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Saved Search");
            }
        });
    });

};