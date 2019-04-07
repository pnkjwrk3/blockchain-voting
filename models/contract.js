const Sequelize = require("sequelize")
const db = require("../database/db")

module.exports = db.sequelize.define(
    'contract',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        created: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
        
    },
    {
        timestamps: false
    }
)