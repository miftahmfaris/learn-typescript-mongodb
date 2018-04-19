const env = process.env.NODE_ENV;

module.exports =
  env === "development" ?
  {
    type: "mongodb",
    database: "impactodo",
    synchronize: true,
    logging: false,
    entities: ["src/entity/**/*.ts"],
    migrations: ["src/migration/**/*.ts"],
    subscribers: ["src/subscriber/**/*.ts"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  } :
  {
    type: "mongodb",
    database: "impactodo",
    synchronize: true,
    logging: false,
    entities: ["build/entity/**/*.js"],
    cli: {
      entitiesDir: "src/entity",
      migrationsDir: "src/migration",
      subscribersDir: "src/subscriber"
    }
  };