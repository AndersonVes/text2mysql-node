import express from "express";
import routes from './routes/index.js'


const app = express();
routes(app)
app.use(express.json())

export default app