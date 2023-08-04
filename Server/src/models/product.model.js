import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    _id: { type: Schema.Types.ObjectId, auto: true },
    name: { type: Schema.Types.String, require: true },
    price: { type: Schema.Types.Number, require: true },
    description: { type: Schema.Types.String},
})

const Product = mongoose.model('Product', productSchema);

export default Product;