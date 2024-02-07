const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("artist", {
    id: {
        type: DataTypes.STRING,
        primaryKey:true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type:  DataTypes.TEXT,
        allowNull: false
    },
    accountType: {
        type: DataTypes.STRING,
        defaultValue: "Basic"
    },
    experience: {
        type: DataTypes.ARRAY(DataTypes.JSON)
    },
    img:{
        type: DataTypes.STRING,
        allowNull: true
    }
  });
};