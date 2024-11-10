import { Request, Response, NextFunction } from "express";
import { body, validationResult, ValidationChain } from 'express-validator';


export const validateRegistration: ValidationChain[] = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Invalid email'),
  body('password').isLength({ min: 7 }).withMessage('Password must be at least 7 characters'),
  body('user_creator_id').notEmpty().withMessage('User creator is required')
]; 

export const handlerValidationErros =  (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};