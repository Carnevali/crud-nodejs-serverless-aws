const Sequelize = require('sequelize');

//Be careful if you are conneting to RDS to AWS. You shoud to double check if your VPC is allow everyone to connect in your database 
// or create a rule that you give permissions only people that you want
const sequelize = new Sequelize('admin-instance', 'serverless_admin', 'serverless_admin', {
    dialect: 'mysql',
    host: 'admin-instance.cxytgt9dqiz9.us-west-2.rds.amazonaws.com',
    port: 3306
});

const todo = require('./models/todo')(sequelize, Sequelize);

const db = {
    Sequelize,
    sequelize,
    todo
};

db.sequelize.sync(/*{force: true}*/);

module.exports = db;

//db.todo.findOne({where: {id: 1}});
