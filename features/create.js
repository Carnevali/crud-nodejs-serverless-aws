const db = require('../db');

module.exports.createTodo = (event, context, callback) => {
    const body = JSON.parse(event.body);

    db.todo.create({
        task: body.task 
    }).then(todo => {
        const response = {
            statusCode: 200,
            body: JSON.stringify({
                todo: todo
            }),
        };    

        return callback(null, response);
    }).catch(error => {
        console.log(new Error(`Error when we try to create a new item: ${error}`))
    });
};

//Model of json that I need to test in PostMan
/*
{
	"task": "Feed the cats"
}
*/