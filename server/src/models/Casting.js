const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("casting", {
    id: {
        type: DataTypes.STRING,
        primaryKey:true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    producer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hairColor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    eyeColor: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ethnicity: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    img:{
        type: DataTypes.STRING,
        allowNull: true
    },
    active:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
  });
};