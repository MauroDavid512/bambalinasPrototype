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
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    birthdate: {
        type: DataTypes.DATEONLY,
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
    hairColor: {
        type: DataTypes.STRING,
        allowNull:false
    },
    eyeColor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ethnicity: {
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