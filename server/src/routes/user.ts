import User, { IUser } from "../models/users"
import { Request, Response, NextFunction } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export async function register(req: Request, res: Response, next: NextFunction) {
  try {
    let { email, password, firstName, lastName} = req.body;
    let hashedPassword = await bcrypt.hash(password, 8)
    const user: IUser = new User({
      email,
      firstName,
      lastName,
      password: hashedPassword
    })
    await user.save()
    res.send('OK')
  } catch (err) {
    next(err)
  }
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { email, password } = req.body;
  // validation
  if (!email || !password) {
   return res.status(400).json({
      error: 'email and password is required'
    })
  }
  try {
    const user: IUser | null = await User.findOne({ email });
    if (!user) return next();
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return res.json({ error: 'invalid email or password' })
    }
    const token = await jwt.sign({ id: user._id }, (process.env.JWT_SECRET_KEY as string), { expiresIn: "2h" })
    res.json({
      token,
      user
    })
  } catch (error) {
    next(error)
  }
}