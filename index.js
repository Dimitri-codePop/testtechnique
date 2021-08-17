require('dotenv').config();

const express = require('express');
const router = require('./app/router/router')

const app = express();

const port = process.env.PORT || 3000;


app.use(express.static('./Front/integration'));

app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});