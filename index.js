require('dotenv').config();

const express = require('express');
const router = require('./app/router/router')
const cors = require ('cors');

const app = express();

const port = process.env.PORT || 3000;

app.use(cors("*"));

app.use(express.json());
app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});