module.exports = {
    type: 'sqlite',
    database: 'src/database/database.sqlite',
    synchronize: false,
    logging: false,
    entities: ['**/models/*.ts'],
    migrations: ['src/database/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
        entitiesDir: 'src/models',
        migrationsDir: 'src/database/migration',
        subscribersDir: 'src/subscriber'
    }
};
