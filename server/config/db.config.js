module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "viky28",
    DB: "vikyDB",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };