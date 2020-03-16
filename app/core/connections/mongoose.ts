import mongoose from 'mongoose';

export default (database: string) => {

    const connect = () => {
        mongoose.connect(
            database,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true
            }
        ).then(() => {
            return console.info(`Successfully connected to ${database}`);
        }).catch(error => {
            console.error('Error connecting to database: ', error);
            return process.exit(1);
        });
    };
    connect();

    mongoose.connection.on('disconnected', connect);
};