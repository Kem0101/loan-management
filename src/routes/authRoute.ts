import express from "express";
import { validateRegistration, handlerValidationErros } from '../middlewares/validationMiddleware';
import AuthController from "../controllers/AuthController";


const router = express.Router();


router.post('/register', validateRegistration, handlerValidationErros, (req: any, res: any) => AuthController.registerUser(req, res));

export default router;