import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface AuthRequest extends Request {
  user?: string | object;  
}

export const authenticateUser = (req: AuthRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret'); 
    req.user = decoded;  
    next(); 
  } catch (error) {
    return res.status(400).json({ message: 'Invalid token.' });
  }
};
