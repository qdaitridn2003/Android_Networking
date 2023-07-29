import express from 'express';
import { ContactController } from '../controllers';

const contactRoutes = express.Router();

contactRoutes.get('/list', ContactController.handleReturnList);

contactRoutes.get('/object', ContactController.handleReturnObject);

contactRoutes.get('/array', ContactController.handleReturnArray);

export default contactRoutes;