'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Note extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Note.init({
    name: DataTypes.STRING,
    content: DataTypes.STRING,
    category: DataTypes.STRING,
    dates: DataTypes.STRING,
    is_archived: DataTypes.BOOLEAN,
    id: DataTypes.UUID,
    created_at: DataTypes.DATE,
    edited_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};