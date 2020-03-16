"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const application_json_1 = __importDefault(require("../../application.json"));
class ApplicationConfiguration {
}
exports.ApplicationConfiguration = ApplicationConfiguration;
// get environment as of type ConfigurationEnvironments
ApplicationConfiguration.environment = application_json_1.default.environment;
ApplicationConfiguration.applicationConfigurations = application_json_1.default.configurations;
ApplicationConfiguration.configuration = ApplicationConfiguration.applicationConfigurations[ApplicationConfiguration.environment];
exports.default = ApplicationConfiguration;
