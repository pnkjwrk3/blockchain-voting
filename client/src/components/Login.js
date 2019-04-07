import React, { Component } from 'react'
import { login } from './UserFunctions'
import Web3 from 'web3'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            pubkey: '0x0',
            error: ''
            //UID: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        if (typeof window.web3 !== 'undefined') {
            this.web3Provider = window.web3.currentProvider
          } else {
            this.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545')
          }
      
        this.web3 = new Web3(this.web3Provider)
    }

    componentDidMount() {
        this.web3.eth.getCoinbase((err,pubkey) =>{
            this.setState({pubkey})
        });
    }

    onChange (e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit (e) {
        e.preventDefault()

        const user = {
            email: this.state.email,
            password: this.state.password,
            pubkey: this.state.pubkey
            //UID: this.state.UID
        }

        login(user).then(res => {
            // if (!res.error) {
            //     this.props.history.push(`/profile`)
            // } else {
            //     this.setState({ error: res.error })
            // }
            if (res) {
                console.log(res)
                this.props.history.push(`/profile`)
            }
        })
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Enter Email"
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password"
                                    className="form-control"
                                    name="password"
                                    placeholder="Enter Password"
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            {/* <div className="form-group">
                                <label htmlFor="UID">UID</label>
                                <input type="text"
                                    className="form-control"
                                    name="UID"
                                    placeholder="Enter UID"
                                    value={this.state.UID}
                                    onChange={this.onChange}
                                />
                            </div> */}
                            <p>Your account: {this.state.pubkey}</p>
                            <div className="alert alert-danger"
                                style={{ visibility: this.state.error !== '' ? 'visible' : 'hidden' }}>{this.state.error}</div>
                            <button type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login