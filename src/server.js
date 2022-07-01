import express,{json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config();

const server = express();

server.use([json(),cors(),router]);

const PORT=process.env.PORT || 4001;

server.listen(PORT, ()=>console.log(`Server running on ${PORT} port`));
