// Import npm packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
let bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const routes = require('./routes/api');

// testuser, test

// CONNECT WITH MONGODB
// const URI = "mongodb+srv://testuser:test@cluster0.r5usd.mongodb.net/test?retryWrites=true&w=majority";
const URI = "mongodb+srv://testuser:test@cluster0.g7m5z.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!');
});

// DATA PARSING
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());


// HTTP REQUEST LOGGER
app.use(morgan('tiny'));
app.use('/api', routes);


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


app.listen(PORT, console.log(`Server is starting at ${PORT}`));