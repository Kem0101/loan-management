import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";


class FeeModel extends Model {
  public id!: number;
  public amount!: number;
  public expiration_date!: Date;
  public paid!: boolean;
  public payment_date!: Date | null;
  public loan_id!: number;
}

FeeModel.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  expiration_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paid: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  payment_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  loan_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Fee',
});

export default FeeModel;