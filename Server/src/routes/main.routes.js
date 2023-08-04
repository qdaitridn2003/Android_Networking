import { androidVersion } from "../utils/constants";
import accountRoutes from "./account.routes";
import caculateRoutes from "./calculate.routes";
import contactRoutes from "./contact.routes";
import productRoutes from "./product.routes";
import studentRoutes from "./student.routes"

const mainRoutes = (app) => {
    app.use('/student', studentRoutes);
    app.use('/calc', caculateRoutes);
    app.use('/contact', contactRoutes);
    app.use('/account', accountRoutes);
    app.use('/product', productRoutes);

    app.get('/version', (req,res,next) => {
        return res.json(androidVersion);
    })
}

export default mainRoutes;