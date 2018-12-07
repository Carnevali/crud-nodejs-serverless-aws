'use strict';

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('todo', {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        task: {
            type: DataTypes.STRING
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }/*,
        create_at: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: false
        },
        update_at: {
            type: DataTypes.DATE,
            defaultValue: new Date(),
            allowNull: false
        },
        delete_at: {
            type: DataTypes.DATE
        }*/
    }, 
    {
        paranoid: true,
        underscored: true
    });
}