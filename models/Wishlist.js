const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Wishlist extends Model {}

Wishlist.init(
{
    id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    listName:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userID:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:
        {
            model: 'user',
            key: 'id'
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'wishlist'
});

module.exports = Wishlist;