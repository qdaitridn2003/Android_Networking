import express from 'express';
import { StudentController } from '../controllers';

const studentRoutes = express.Router();

studentRoutes.post('/', StudentController.handleReceiveAndReturnData);

export default studentRoutes;