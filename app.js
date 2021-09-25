const express = require('express');
const mongoose = require('mongoose');

const { PORT } = require('./config/variables')


const app = express();

app.listen(PORT, () => {
    console.log('App listen 5000')
})
