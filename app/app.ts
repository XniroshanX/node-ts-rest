import express, { Application } from 'express';
import bodyParser from 'body-parser';
import ApiRoutes from './routes/api';
import WebRoutes from './routes/web';
import { ApplicationConfiguration } from './config/application';
import mongooseConnection from '../app/core/connections/mongoose';

const app: Application = express();
mongooseConnection(ApplicationConfiguration.configuration.mongoose.connection);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.use('/api', ApiRoutes);
app.use('/', WebRoutes);
app.listen(5002, () => {
    console.log('Server started on http://localhost:5002');
});