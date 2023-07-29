import mongoose, { Schema } from 'mongoose';

const accountSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
})

const Account = mongoose.model('Account', accountSchema);

export default Account;