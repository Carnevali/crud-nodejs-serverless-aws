'use strict';

const db = require('../db');

module.exports.deleteTodo = (event, context, callback) => {
    db.todo.destroy({
        where: {id: event.pathParameters.id} 
    }).then(numDeleted => {
        const response = {
            statusCode: 204,
            body: JSON.stringify({
                numDeleted: numDeleted
            }),
        };    

        return callback(null, response);
    }).catch(error => {
        return callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                error: `There was an error deleting your todo with id: ${event.pathParameters.id}`
            })
        });
    });
};