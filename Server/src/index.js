import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
import mainRoutes from './routes/main.routes';
import mongodbConnectionHandler from './configs/mongodb';

dotenv.config({ path: './.env' });

const App = express();
const Port = process.env.PORT;

/* Using Middleware */
App.use(bodyParser.urlencoded({ extended: true }));
App.use(bodyParser.json());

/* Main Endpoint */
mainRoutes(App);

/* Mongodb Connection */
mongodbConnectionHandler() 

const Server = http.createServer(App);

Server.listen(Port, () => {
    console.log(`Server is listening on ${Port}`);
})