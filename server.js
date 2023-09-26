require("dotenv").config();
const path = require("path");
import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import dbConnection from './database/db.js';

const app = express();

app.use(cors());
app.use('/', router);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
}

const port = process.env.port || 8000;

const MONGODB_URL = (process.env.MONGO_URI)


dbConnection(MONGODB_URL);

app.listen(port, () => console.log('Connected to server'));

