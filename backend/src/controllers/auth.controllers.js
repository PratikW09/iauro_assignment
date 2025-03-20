import { registerUser, loginUser } from '../services/auth.services.js';
import { successResponse } from '../utils/reponsehandler.utils.js';

const options = {
    httpOnly: true,
    secure: true,
  };

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const userData = await registerUser(req.body);
    res.cookie('token', userData.token, options);
    
    return successResponse(res,201, 'User registered successfully', {
        userId: userData.userId,
        name: userData.name,
        email: userData.email,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const userData = await loginUser(req.body);
    res.cookie('token', userData.token, options);
    
    return successResponse(res,200, 'User Login successfully', {
        userId: userData.userId,
        name: userData.name,
        email: userData.email,
      });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];

    if (!token) {
      return errorResponse(res, 400, 'Token not found.');
    }
    
    res.clearCookie('token', options)
    
    return Response(res,200, 'User logged out successfully');
  } catch (error) {
    res.status(500).json({ message: 'Logout failed' });
  }
};

export { register, login, logout };
