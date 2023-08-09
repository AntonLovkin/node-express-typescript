'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
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
    context: DataTypes.STRING,
    categories: DataTypes.STRING,
    dates: DataTypes.STRING,
    is_archived: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Note',
  });
  return Note;
};