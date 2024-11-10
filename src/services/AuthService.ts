import UserModel from "../models/UserModel";
import { IRegisterData } from "../types/UserTypes";


class AuthService {
  async registerUser(data: IRegisterData){
    const existingUser = await UserModel.findOne({ where: { email: data.email }})
    console.log(existingUser);
    if(existingUser){
      throw new Error('User already exist');
    }
    console.log(data)
    const user = await UserModel.create(data as any);
    return user;
  }
}

export default new AuthService;