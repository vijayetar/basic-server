'use strict';
const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT|| 3001;

app.get('/', (request,response) => response.send(('Hello hey this is my server')));
app.listen(PORT, ()=> console.log('app is up and running'));
