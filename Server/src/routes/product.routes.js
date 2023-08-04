import express from 'express';
import { ProductController } from '../controllers';

const productRoutes = express.Router();

productRoutes.get('/', ProductController.handleGetProduct);

productRoutes.post('/add', ProductController.handleAddProduct);

productRoutes.patch('/edit/:_id', ProductController.handleEditProduct);

productRoutes.delete('/del/:_id', ProductController.handleDeleteProduct);

export default productRoutes;