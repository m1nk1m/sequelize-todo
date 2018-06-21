const nodeEnv = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production';

module.exports = {
  database: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || null,
    database: process.env.DB_SCHEMA_NAME,
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: process.env.DB_DIALET || "mysql",
    define: {
      underscored: false,
      freezeTableName: false,
      charset: "utf8",
      dialectOptions: {
        collate: "utf8_general_ci"
      },
      timestamps: false
    }
  }
};