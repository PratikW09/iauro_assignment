import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};


export const generateToken = (user) => {
  const accessToken = jwt.sign(
    { userId: user._id, email: user.email },
    process.env.access_token_secret,
    { expiresIn: '7d' }
  );
  return { accessToken };
};


export const decodeToken = async (token) => {
    try {
      const decoded = await jwt.verify(token, process.env.access_token_secret); 
      return decoded.userId;
    } catch (error) {
      throw new Error('Invalid token');
    }
  };