import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { jwtConfig } from '../config/database';


interface AuthRequest extends Request {
  user?: {
    id: number
  }
}

export const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1]; // Bearer token

  if(!token){
     res.status(401).json({ message: 'Access denied. Token required.'});
  }

  try {
    // Verify token
    const decoded = jwt.verify(token as string, jwtConfig.secret) as JwtPayload;

    // Add the user information to the request object
    req.user = { id: decoded.id };  
    next();

  } catch (error) {
    console.log('Authentication error', error);
    res.status(403).json({ message: 'invalid or expired token'});
  }
}