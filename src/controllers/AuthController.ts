import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { IRegisterData } from "../types/UserTypes";



class AuthController {
  async registerUser(req: Request<IRegisterData>, res: Response): Promise<void> {
    try {
      const { name, email, password, is_owner, user_creator_id } = req.body;
      const newUser = await AuthService.registerUser({ name, email, password, is_owner, user_creator_id });
       res.status(201).json({ message: 'User successfully created', user: newUser});

    } catch (error) {
      if(error instanceof Error){
        console.log('Error creating user', error);
         res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Internal server error '})
      }
       
    }

    
  }
}

export default new AuthController;