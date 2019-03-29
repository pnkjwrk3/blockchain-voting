const Sequelize = require("sequelize")
const db = {}

const sequelize = new Sequelize("CSe9oMyNig", "CSe9oMyNig", "T7JPtShbuM", {
    host: 'remotemysql.com',
    port:3306,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db 
