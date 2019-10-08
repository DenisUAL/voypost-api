export default {
  port: process.env.PORT,
  postgres: {
    database: process.env.SQL_DB,
    username: process.env.SQL_USER,
    password: process.env.SQL_PASS || '',
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    dialect: 'postgres',
    logging: false,
    pool: {
      max: 50,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
};
