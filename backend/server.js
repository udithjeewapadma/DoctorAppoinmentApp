import express from 'express';
import cors from 'cors';
import 'dotenv/config';

//app config

const app = express();
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());

app.use('/', (req,res)=>{
    res.send('API Working')
})

app.listen(port,()=> console.log('Server Started',port))