import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './users.js';

//usersRoutes can be any name

const app = express();
const port = 5000;

//init body parser
app.use(bodyParser.json()); 

app.listen(port, ()=> console.log(`server is running on port: ${port}`));

app.get('/', (req,res) => res.send('Home-Page'));
app.use('/users',usersRoutes);





