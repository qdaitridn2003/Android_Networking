import express from 'express';
import { CalcController } from '../controllers';

const caculateRoutes = express.Router();

caculateRoutes.post('/retangle', CalcController.handleRectanglePerimeterAndAcreage);

caculateRoutes.post('/cube', CalcController.handleVolumeOfCube);

caculateRoutes.post('/quadratic', CalcController.handleQuadratic);

export default caculateRoutes;