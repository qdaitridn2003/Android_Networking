import express from 'express';
import { AccountController } from '../controllers';

const accountRoutes = express.Router();

accountRoutes.post('/login', AccountController.handleLogin);
accountRoutes.post('/register', AccountController.handleRegister);
accountRoutes.patch('/changepassword', AccountController.handleChangePassword);

export default accountRoutes;