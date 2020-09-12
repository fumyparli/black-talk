require("dotenv").config();

module.exports = {
    development: {
        username: "root",
        password: process.env.SEQUELIZE_PASSWORD,
        database: "black_talk",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: false,
    },
    test: {
        username: "root",
        password: process.env.SEQUELIZE_PASSWORD,
        database: "black_talk",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: false,
    },
    production: {
        username: "root",
        password: process.env.SEQUELIZE_PASSWORD,
        database: "black_talk",
        host: "127.0.0.1",
        dialect: "mysql",
        operatorsAliases: false,
        logging: false, // SELECT 어쩌구 로깅 기록 안뜸
    },
};

// 원래 json파일이었는데 js파일로 바꿈 // "" 붙여야 되나?
