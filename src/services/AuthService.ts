import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from "../models/UserModel";
import { IRegisterData, ITokenPair } from "../types/UserTypes";
import { jwtConfig } from '../config/database';


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

  async login(email:string, password:string): Promise<{ user: UserModel; tokens: ITokenPair }> {
    const user = await UserModel.findOne({ where: { email }});
    if(!user){
      throw new Error('Invalid credencials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
      throw new Error('Verify your password');
    }

    const tokens = this.generateTokens(user);
    return { user, tokens };
  }


  // Refreshes the access token using a valid refresh token.
  async refreshToken(refreshToken: string): Promise<ITokenPair> {
    const decoded: any = jwt.verify(refreshToken, jwtConfig.secret);
    const user = await UserModel.findByPk(decoded.id);
    if(!user){
      throw new Error('User not found');
    }

    return this.generateTokens(user);

  }

  // Generates an access and refresh token pair.
  private generateTokens(user: UserModel): ITokenPair {
    const { id } = user;
    const accessToken = jwt.sign({ id }, jwtConfig.secret, { expiresIn: jwtConfig.accessTokenExpiration });

    const refreshToken = jwt.sign({ id }, jwtConfig.secret, { expiresIn: jwtConfig.refreshTokenExpiration });

    return { accessToken, refreshToken };
  }
}

export default new AuthService;