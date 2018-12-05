const Sequelize = require('sequilze');
const sequelize = new Sequelize('db-url');
const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
    Sequelize,
    sequelize,
    todo
};

db.sequelize().sync(/*{force: true}*/);

module.exports= db;

//db.todo.findOne({where: {id: 1}});