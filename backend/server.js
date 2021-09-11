const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MONGODB DATABASE CONNECTION ESTABLISHED!!")
})

const dataRouter = require('../backend/routes/data_r');
app.use('/history', dataRouter);


app.listen(port, () => {
    console.log('SERVER IS RUNNING ON PORT ' + port);
});