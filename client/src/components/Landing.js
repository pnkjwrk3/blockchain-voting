import React, { Component } from 'react'
import Web3 from 'web3'
class Landing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            account: '0x0'
        }
        if (typeof window.web3 !== 'undefined') {
          this.web3Provider = window.web3.currentProvider
        } else {
          this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545')
        }
    
        this.web3 = new Web3(this.web3Provider)
        //console.log(this.web3Provider)
        // const publicAddress = this.web3.eth.coinbase;
      }
    componentDidMount() {
        this.web3.eth.getCoinbase((err,account) =>{
            this.setState({account})
        });
    }
    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">WELCOME</h1>                        
                    </div>
                </div>
                <div className="col-sm-8 mx-auto">
                    <h5>Your account: {this.state.account}</h5>
                </div>                
            </div>
        )
    }
}

export default Landing