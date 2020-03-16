import express, { Application } from 'express';
import bodyParser from 'body-parser';
import ApiRoutes from './routes/api';
import WebRoutes from './routes/web';
import mongooseConnection from '../app/core/connections/mongoose';
import { ApplicationConfiguration } from './config/application';

// create express app
const app: Application = express();

// initiate mongoose connection
mongooseConnection(ApplicationConfiguration.configuration.mongoose.connection);

// use body parsers for json inputs
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// set pug as view engine
// for more information visit
// https://pugjs.org/api/getting-started.html
app.set('view engine', 'pug');

// set router files 
app.use('/api', ApiRoutes);
app.use('/', WebRoutes);

// start server
app.listen(5002, () => {
    console.log('Server started on http://localhost:5002');
});