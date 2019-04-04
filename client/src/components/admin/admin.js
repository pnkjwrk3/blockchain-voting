import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import jwt_decode from 'jwt-decode'

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account: '0x0',
            candidates: [],
            contractadd: '0x'
        }

        if (typeof window.web3 !== 'undefined') {
            this.web3Provider = window.web3.currentProvider
          } else {
            this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
          }
      
          this.web3 = new Web3(this.web3Provider)
    }

    render(){
        return(
            <h1>Admin</h1>
        )
    }
}