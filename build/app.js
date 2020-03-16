"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./routes/api"));
const web_1 = __importDefault(require("./routes/web"));
const mongoose_1 = __importDefault(require("./core/connections/mongoose"));
const application_1 = require("./config/application");
// create express app
const app = express_1.default();
// initiate mongoose connection
mongoose_1.default(application_1.ApplicationConfiguration.configuration.mongoose.connection);
// use body parsers for json inputs
app.use(body_parser_1.default.json());
// for parsing application/x-www-form-urlencoded
app.use(body_parser_1.default.urlencoded({ extended: true }));
// set pug as view engine
// for more information visit
// https://pugjs.org/api/getting-started.html
app.set('view engine', 'pug');
// set router files 
app.use('/api', api_1.default);
app.use('/', web_1.default);
// start server
app.listen(5002, () => {
    console.log('Server started on http://localhost:5002');
});
