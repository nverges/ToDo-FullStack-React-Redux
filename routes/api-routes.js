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
    
    router.post('/api/todolist', function (req, res) {
        ToDoList.create(req.body, function(err, todo) {
            if (err) {
                console.log(err);
            } else {
                res.send(todo);
            }
        });
    });

    router.delete('/api/todolist', function(req, res) {
        const { id } = req.params;
        // console.log(req.body);
        console.log(id)
        ToDoList.deleteOne( { id } , function(err, todo) {
            if (err) {
            console.log(err);   
            }
            else {
            res.send(todo);
            console.log('Article Deleted');
            }
        });
    });

    router.put('/api/todolist', function(req, res) {
        const doc = {
            title: req.body.title,
            category: req.body.category,
            dueDate: req.body.dueDate,
            comments: req.body.comments,
            completed: req.body.completed
        }
        ToDoList.update( {_id: req.params.id} ), doc, function(err, todo) {
            if (err) {
                console.log('error updating entry');
                res.send(err);
            } else {
                console.log('entry updated successfully');
                res.send(todo);
            }
        }
    })
    
    
    router.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname + '/../public/index.html'));
    });

};