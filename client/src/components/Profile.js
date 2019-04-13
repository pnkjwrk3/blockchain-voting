import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { findAddress, findConsts } from './dashboard/ContractFunctions'

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            account: '0x0',
            UID:'',
            constname: '',
            contractadd:''
        }
    }

    componentDidMount () {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        console.log(token)
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email,
            account: decoded.pubkey,
            UID:decoded.UID,
            constname: decoded.constname
        })
        const contload = {
            name: decoded.constname
          }
          findAddress(contload).then(res => {
            if (res) {
              console.log(res.address);
              this.setState({ contractadd: res.address });
            }
          });
    }

    loadDash=()=>{
        this.props.history.push({ pathname: '/dashboard', state:{contractadd:this.state.contractadd}})
    }

    render () {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td>Account</td>
                                <td>{this.state.account}</td>
                            </tr>
                            <tr>
                                <td>UID</td>
                                <td>{this.state.UID}</td>
                            </tr>
                            <tr>
                                <td>ConstName</td>
                                <td>{this.state.constname}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className={'btn btn-primary'} style={{flex:1, marginLeft:'400px'}} onClick={this.loadDash} >Click here to vote</button>
                </div>
            </div>
        )
    }
}

export default Profile
