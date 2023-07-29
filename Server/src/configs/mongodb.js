import mongoose from 'mongoose';

const mongodbConnectionHandler = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/android_networking')
        .then(() => { console.log('Mongodb has been connected') })
        .catch((error) => console.log(error));
}

export default mongodbConnectionHandler;