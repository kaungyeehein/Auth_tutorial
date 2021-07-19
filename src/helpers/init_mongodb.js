const mongoose = require('mongoose');

// DB Connect
mongoose.connect(process.env.MONGODB_URL, {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('Mongodb: connected...');
}).catch(err => {
    console.log('Mongodb: ' + err.message);
});

// onConnected event
mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected to db.');
});

// onError event
mongoose.connection.on('error', (err) => {
    console.log(err.name + ":" + err.message);
});

// onDisconnected event
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected from db.');
});

// Ctrl+C to terminate process
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});