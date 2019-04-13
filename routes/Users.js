const express = require("express")
const users = express.Router()
const cors = require('cors')
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const User = require("../models/User")
const Contract = require("../models/contract")
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today,
        pubkey: req.body.pubkey,
        UID: req.body.UID,
        constname: req.body.constname
    }

    User.findOne({
        where: {
            [Op.or]:
            [{email: req.body.email},
            {pubkey: req.body.pubkey},
            {UID:req.body.UID}]
        }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' registered' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.send({ error: "User already exists" })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email,
            pubkey: req.body.pubkey
            //UID: req.body.UID
        }
    })
        .then(user => {
            if (user) {
                //if (bcrypt.compareSync(req.body.password, user.password) && (req.body.pubkey==user.pubkey) && (req.body.UID==user.UID)) {
                if (bcrypt.compareSync(req.body.password, user.password) && (req.body.pubkey==user.pubkey)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token)
                }
            } else {
                //alert("Invalid combination of password and key")
                res.status(400).json({ error: 'User does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

users.post('/findAddress', (req, res) => {
    Contract.findOne({
        where: {
            name: req.body.name
        }
    })
        .then(user => {
            if (user) {   
                    let data2 = user.dataValues
                    res.send(data2) 
            } else {
                res.status(400).json({ error: 'Constituency does not exist' })
            }
        })
        .catch(err => {
            res.status(400).json({ error: err })
        })
})

module.exports = users