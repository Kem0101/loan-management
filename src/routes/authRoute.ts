import express from "express";
import { validateRegistration, handlerValidationRegisterErros, validateLogin, handlerValidationLoginErros } from '../middlewares/validationMiddleware';
import AuthController from "../controllers/AuthController";


const router = express.Router();


router.post('/register', validateRegistration, handlerValidationRegisterErros, (req: any, res: any) => AuthController.registerUser(req, res));
router.post('/login', validateLogin, handlerValidationLoginErros, AuthController.login);
router.post('/refresh-token', AuthController.freshToken);

export default router;