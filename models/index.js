const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config")[env];
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Chat = require('./chat')(sequelize, Sequelize);
db.Room = require('./room')(sequelize, Sequelize);

db.Room.hasMany(db.Chat);
db.Chat.belongsTo(db.Room);

module.exports = db;