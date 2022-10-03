import express, { Express, Request, Response } from "express";
import cors from 'cors';
import dotenv from "dotenv";
import { connectDB } from "./src/config/database";
import { baseRouter } from "./src/routes";
import { fileUpload } from './src/helpers/file-upload';

dotenv.config();

connectDB();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json({ limit: '100mb' }));
app.use("/api/v1", baseRouter)

// app.post('/upload', async (req, res) => {
//     const { file } = req.body;
//     console.log((file as string).slice(0, 10), 'file >>>>')
//     const data = await fileUpload(file as string);

//     return res.status(200).json({ data });
// });

app.use("/", (req: Request, res: Response) => {
    res.send("Welcome to phone contact list in Express + Typescript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});