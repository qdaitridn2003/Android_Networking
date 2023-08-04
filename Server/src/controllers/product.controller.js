import Product from '../models/product.model';

class ProductController {
    async handleAddProduct(req, res, next) {
        const { name, price, description } = req.body;
        try {
            const result = await Product.create({ name, price, description });
            if (result) return res.json({ message: 'Product created successfully' });
        } catch (error) {
            console.log(error);
        }
    }

    async handleEditProduct(req, res, next) {
        const { _id } = req.params;
        const { name, price, description } = req.body;
        try {
            const result = await Product.updateOne({ _id }, { name, price, description });
            if (result) return res.json({ message: 'Product edited successfully' });
        } catch (error) {
            console.log(error);
        }
    }

    async handleDeleteProduct(req, res, next) {
        const { _id } = req.params;
        try {
            const result = await Product.deleteOne({ _id });
            if (result) return res.json({ message: 'Product deleted successfully' });
        } catch (error) {
            console.log(error);
        }
    }

    async handleGetProduct(req, res, next) {
        try {
            const result = await Product.find({});
            if (result) return res.json({ result });
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ProductController;