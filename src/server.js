import express,{json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import signup from './controllers/authController.js';

dotenv.config();

const server = express();

server.use([json(),cors()]);

server.post("/sign-up", signup);

const PORT=process.env.PORT || 4001;

server.listen(PORT, ()=>console.log(`Server running on ${PORT} port`));
