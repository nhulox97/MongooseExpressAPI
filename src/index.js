import express from 'express';
import mongo from './config/database'
import app from './app'

const PORT = process.env.PORT || 3000;
const db = mongo.connection;

db.on('error', () => {
    console.log(' > Error on connect.');
});

db.once('open', () => {
    console.log('> Successfully opened the database.');
    app.listen(PORT, () => {
        console.log(`> Server started on http://localhost:${PORT}/`);
        console.log('> Press Ctrl-C to terminate');
    })
});


export default app;