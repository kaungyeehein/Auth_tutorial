const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
require('dotenv').config();
require('./helpers/init_mongodb');

const AuthRoute = require('./routes/Auth.route');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Default route
app.get('/', async (req, res, next) => {
    res.send("Hello from express.");
});

// Routes
app.use('/auth', AuthRoute);

// 404 Error Controller
app.use((req, res, next) => {
    next(createError.NotFound());
});

// Defalt error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});