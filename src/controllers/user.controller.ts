import { Request, Response } from 'express';
import { User } from '../model/user.model';

// Create a new user
export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();
    
    res.status(201).json({ message: 'User created', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};

// Get all users
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve users' });
  }
};


