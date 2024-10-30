import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class LoanModel extends Model {
  public id!: number;
  public amount!: number;
  public interest_rate!: number;
  public payment_frequency!: string;
  public start_date!: Date;
  public end_date!: Date;
  public client_id!: number;
  public user_id!: number;
}

LoanModel.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  interest_rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  payment_frequency: {
    type: DataTypes.ENUM('semanal', 'quincenal', 'mensual'),
    allowNull: false,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  client_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Loan',
});

export default LoanModel;