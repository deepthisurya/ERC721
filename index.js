'use strict'
const express = require('express');
const cors = require('cors');
const config = require('./config');
const imageRouter = require('./routes/image-route');

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api', imageRouter.routes);

app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));