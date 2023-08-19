import cors from 'cors';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { dbInstance } from './middleware/dbInstance';

const app = express();

/*------------ Middlewares --------------*/
app.use(cors());
app.use(express.json());
app.use(dbInstance);

/*------------ Home Routes --------------*/
app.get("/", (req, res) => {
    const filePath = fs.readFileSync(
      path.join(__dirname, "../public/index.html"),
      "utf8"
    );
    res.send(filePath);
  });

/*----------- Import all Routes ------------*/
import userRoutes from './routes/v1/userRouter';

/*--------------- Route MiddleWare ---------------*/
app.use('/api/v1/user', userRoutes)


export default app;