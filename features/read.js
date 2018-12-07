'use strict';

const db = require('../db');

module.exports.getTodo = async (event, context, callback) => {
    db.todo.findOne({
        where: {id: event.pathParameters.id},
        attributes: ["id", "task", "completed"]
    }).then(todo => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                todo: todo
            }),
        };
    
        return callback(null, response);
    })
    .catch(error => {
        return callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                error: `There was an error fetching your tod with id: ${event.pathParameters.id}`
            }),
        });
    });
};

module.exports.listTodos = async (event, context, callback) => {
    db.todo.findAll({
        attributes: ['id', 'task', 'completed']
    }).then(todos => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                todos: todos
            }),
        };
    
        return callback(null, response);    
    })
    .catch(error => {
        return callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                error: `There was an error fetching your tod with id: ${event.pathParameters.id}`
            })
        });
    });
};