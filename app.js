const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true , useUnifiedTopology: true }, () => console.log(`database connected ...`));