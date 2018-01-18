const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const ToDoList = require('../models/ToDoList');

module.exports = function(router) {

    
    router.get('/api/todolist', function (req, res) {
        ToDoList.find({}).sort([
            ["_id", "descending"]
        ]).limit(50).exec(function(err, doc) {
            if (err) {
                console.log(err)
            } else {
                res.send(doc);
            }
        });
    });
    
    router.post('/api/todolist', function (req,res) {
        ToDoList.create(req.body, function(err, todo) {
            if (err) {
                console.log(err);
            } else {
                res.send(req.body);
            }
        });
    });

    // Delete route
    router.delete("/api/todolist/:id", function(req, res) {

        console.log('Delete Article ID: ', req.body);
        const { _id } = req.body;
        ToDoList.findOneAndRemove(_id, function(err, doc) {
          if (err) {
            console.log(err);
          }
          else {
            res.send(doc);
            console.log('Article Deleted');
          }
        });
      });
    
    
    router.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../public/index.html'));
    });

};