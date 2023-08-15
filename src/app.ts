import cors from 'cors';
import express from 'express';
import { dbInstance } from './middleware/dbInstance';

const app = express();

/*------------ Middlewares --------------*/
app.use(cors());
app.use(express.json());
app.use(dbInstance);

/*------------ Home Routes --------------*/
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Static HTML file
});

/* Import all Routes */
import userRoutes from './routes/v1/userRouter';

/*--------------- Route MiddleWare ---------------*/
app.use('/api/v1', userRoutes)


export default app;