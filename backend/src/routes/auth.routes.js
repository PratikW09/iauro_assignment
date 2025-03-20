import express from 'express';
import { register, login, logout} from '../controllers/auth.controllers.js';
import { verifyJWT } from '../middlewares/verifyJWT.middleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
// router.get('/profile', verifyJWT, getUserDetails);
router.post('/logout', verifyJWT, logout);

export default router;