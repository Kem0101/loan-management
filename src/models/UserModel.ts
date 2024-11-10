import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";
import bcrypt from 'bcrypt'; 

  class UserModel extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    public is_owner!: boolean;
    public user_creator_id!: number | null;
  }

  UserModel.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_owner: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    user_creator_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  }, {sequelize, 
      modelName: 'User',
      hooks: {
        beforeCreate: async (user: UserModel) => {
          if (user.password) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },
        beforeUpdate: async (user: UserModel) => {
          if (user.changed('password')) {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
          }
        },
      },
  });

  export default UserModel;