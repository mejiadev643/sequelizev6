import 'dotenv/config';
import express from 'express';

import routes from './routes/routes.mjs';
const app = express();
app.use(express.json());
app.use(express.text());


app.use(routes);
app.listen(process.env.PORT || 300,()=>{console.log("Servidor en: http://localhost:"+process.env.PORT)})