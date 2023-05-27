require('dotenv').config();
require('./database/connection'); //Database connection 

const express = require('express');
const app = express();
const port = process.env.PORT;
const router = require('./routes/router');
const methodOverride = require('method-override');
const cors = require('cors');

app.use(cors());
app.use(express.json()); //Allows express to exchange data by json 
app.use(express.urlencoded({extended: true})); //Allows express to send data
app.use(methodOverride('_method')); //Allows to overwrite methods as delete, put
app.use('/', router); //Redirection to the router

app.listen(port, () => console.log(`Server running on port ${port}`));

