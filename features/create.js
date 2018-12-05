module.exports.createTodo = (event, context, callback) => {
    const body = JSON.parse(event.body);

    const mockDB = body.todo + ' is now saved to the db';
    
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            todo: mockDB
        }),
    };

    return callback(null, response);
};

//Model of json that I need to test in PostMan
/*
{
	"todo": "Feed the cats"
}
*/