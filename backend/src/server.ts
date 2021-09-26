import express, { json } from 'express';
import cors from 'cors'
import routes from './routes';

const app = express();
const PORT = 5000;

app.use(cors())
app.use(json())
app.use(routes)

app.listen(PORT, () => { 
    console.log(`Server is running in http://localhost:${PORT}`)
});
