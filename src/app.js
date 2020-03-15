import express from 'express';
import bodyParser from 'body-parser';
import routes from './config/routes';

const app = express();
// It's a method that's executed before a request reaches a controller
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use('/api', routes);

export default app;