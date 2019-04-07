const express = require("express")
const contracts = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

const Contract = require("../models/contract")
contracts.use(cors())

process.env.SECRET_KEY = 'secret'

contracts.post('/register', (req, res) => {
    const today = new Date()
    const conData = {
        name: req.body.name,
        address: req.body.address,
        created: today
    }

    Contract.findOne({
        where: {
            name: req.body.name
        }
    })
        .then(user => {
            if (!user) {
                //userData.password = hash
                Contract.create(conData)
                    .then(user => {
                        res.json({ status: user.address + ' registered' })
                    })
                    .catch(err => {
                        res.send('error: ' + err)
                    })
            } else {
                res.json({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

contracts.post('/login', (req, res) => {
    Contract.findOne({
        where: {
            name: req.body.name
        }
    })
        .then(user => {
            if (user) {   
                    // let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    //     expiresIn: 1440
                    // })
                    let data2 = user.dataValues
                    res.send(data2) 
            } else {
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = contracts