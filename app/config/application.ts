import ApplicationConfigurations from '../../application.json';

// get environment key as type of environment
export type ConfigurationEnvironments = keyof typeof ApplicationConfigurations.configurations;

export class ApplicationConfiguration {
    // get environment as of type ConfigurationEnvironments
    public static readonly environment: ConfigurationEnvironments = ApplicationConfigurations.environment as ConfigurationEnvironments;

    private static readonly applicationConfigurations = ApplicationConfigurations.configurations;

    public static readonly configuration = ApplicationConfiguration.applicationConfigurations[ApplicationConfiguration.environment];
}

export default ApplicationConfiguration;


