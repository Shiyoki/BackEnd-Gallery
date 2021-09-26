import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

//transform to express
const app = express();
dotenv.config();

//convert data to JSON
app.use(bodyParser.json({ limit:"30mb", extended:true }));
//Send our request JSON
app.use(bodyParser.urlencoded({ limit:"30mb", extended:true }));
app.use(cors());
//recived static files
app.use('/public', express.static(`${__dirname}/storage/imgs`))
//recived route posts
app.use('/posts', postRoutes);


//Connection to mongodatabase
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology:true })
    .then(()=> app.listen(process.env.PORT, ()=> console.log('Server running')))
    .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false)

