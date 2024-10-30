import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/database";

class ClientModel extends Model {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public phone!: string;
  public user_id!: number;
}

ClientModel.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  }
}, {sequelize, modelName: 'Client'});

export default ClientModel;