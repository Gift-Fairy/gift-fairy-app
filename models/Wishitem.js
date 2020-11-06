const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Wishitem extends Model {}

Wishitem.init(
{
    id:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    itemName:
    {
        type: DataTypes.STRING,
        allowNull: false,
    },
    listID:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:
        {
            model: 'wishlist',
            key: 'id'
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'wishitem'
});

module.exports = Wishitem;