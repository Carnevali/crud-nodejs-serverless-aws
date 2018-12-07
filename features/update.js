'use strict';

const db = require('../db');

module.exports.updateTodo = (event, context, callback) => {
    const body = JSON.parse(event.body);
    db.todo.update(body,
            {where: {id: event.pathParameters.id}, returning: true })
        .then(resArr => {
            const [rowsAffeted, todoArr] = resArr;

            console.log(rowsAffeted);

            const response = {
                statusCode: 204,
                body: JSON.stringify({
                    todo: todoArr[0]
                }),
            };    

            return callback(null, response);
        }).catch(error => {
            return callback(null, {
                statusCode: 500,
                body: JSON.stringify({
                    error: `There was an error updating your todo with id: ${event.pathParameters.id}`
                })
            });
        });
};

//Model of json that I need to test in PostMan
/*
{
    "task": "Agora vai hein",
    "completed": true
}
*/