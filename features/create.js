'use strict';

const db = require('../db');

module.exports.createTodo = (event, context, callback) => {
    const body = JSON.parse(event.body);

    db.todo.create({
        task: body.task 
    }).then(todo => {
        const response = {
            statusCode: 201,
            body: JSON.stringify({
                todo: todo
            }),
        };    

        return callback(null, response);
    }).catch(error => {
        return callback(null, {
            statusCode: 500,
            body: JSON.stringify({
                error: `There was an error creating your todo`
            })
        });
    });
};

//Model of json that I need to test in PostMan
/*
{
	"task": "Feed the cats"
}
*/