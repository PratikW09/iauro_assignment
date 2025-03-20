import User from '../models/user.models.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js';
import { hashPassword } from '../utils/token.utils.js';

const registerUser = async (data) => {
  const { name, email, password } = data;

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new Error('User already exists');
  }

  const hashedPassword = await hashPassword(password, salt);

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (!user) {
    throw new Error('Failed to create user');
  }

  const token = await generateToken(user);
  return {
    _id: user.id,
    name: user.name,
    email: user.email,
    token: token,
  };
};

const loginUser = async (data) => {
  const { email, password } = data;

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    return {
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    };
  } else {
    throw new Error('Invalid email or password');
  }
};

export { registerUser, loginUser };
