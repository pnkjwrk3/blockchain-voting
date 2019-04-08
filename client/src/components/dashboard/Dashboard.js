import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import jwt_decode from 'jwt-decode'
import Election from './contracts/Election.json'
import Content from './Content'
//import { findAddress } from './ContractFunctions'
//import 'bootstrap/dist/css/bootstrap.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      candidates: [],
      hasVoted: false,
      loading: true,
      voting: false,
      conname: '',
      contractadd: '0x0',
      electionInstance:'',
      voteEnd:false,
      voteStart:false
    }

    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

    this.web3 = new Web3(this.web3Provider)

    //this.election = TruffleContract(Election)
    //this.election.setProvider(this.web3Provider)

    this.castVote = this.castVote.bind(this)
    this.watchEvents = this.watchEvents.bind(this)
  }


  componentDidMount() {
    // TODO: Refactor with promise chain
    // this.web3.eth.getCoinbase((err, account) => {
    //   this.setState({ account })
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      conname: decoded.constname,
      account: decoded.pubkey
    }); console.log(decoded.constname);

    //get contract address code
    console.log("from profile"+this.props.location.state.contractadd)
    const conadd = this.props.location.state.contractadd
    //console.log(this.state.contractadd);
    if (typeof window.web3 !== 'undefined') {
      this.web3Provider = window.web3.currentProvider
    } else {
      this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
    }

    this.web3 = new Web3(this.web3Provider)

    this.MyContract = new this.web3.eth.Contract(Election.abi, conadd);
    this.setState({electionInstance:this.MyContract})

      //this.electionInstance = electionInstance
      //this.watchEvents()
      this.MyContract.methods.candidatesCount().call().then((candidatesCount) => {
        for (var i = 1; i <= candidatesCount; i++) {
          this.MyContract.methods.candidates(i).call().then((candidate) => {
            const candidates = [...this.state.candidates]
            candidates.push({
              id: candidate[0],
              name: candidate[1],
              voteCount: candidate[2]
            });
            this.setState({ candidates: candidates })
          });
        }
      })
      this.MyContract.methods.votingEnded().call().then((end)=>{
        console.log(end)
        this.setState({voteEnd:end})
      })  
      this.MyContract.methods.votingStarted().call().then((start)=>{
        console.log(start)
        this.setState({voteStart:start})
      }) 
      this.MyContract.methods.voters(decoded.pubkey).call().then((hasVoted) => {
        this.setState({ hasVoted, loading: false })
      })

      
  }



  watchEvents() {
    // TODO: trigger event when vote is counted, not when component renders
    this.state.electionInstance.events.votedEvent({}, {
      fromBlock: 0,
      toBlock: 'latest'
    }).watch((error, event) => {
      this.setState({ voting: false })
    })
  }

  castVote(candidateId) {
    this.setState({ voting: true })
    this.state.electionInstance.methods.vote(candidateId).send({ from: this.state.account }).then((result) =>
      this.setState({ hasVoted: true })
    )
  }

  render() {
    return (
      <div className='row'>
        <div className='col-lg-12 text-center' >
          <h1>E-Voting</h1>
          <br />
          <br />
          {this.state.loading || this.state.voting
            ? <p className='text-center'>Loading...</p>
            : <Content
              account={this.state.account}
              candidates={this.state.candidates}
              hasVoted={this.state.hasVoted}
              castVote={this.castVote}
              voteStart={this.state.voteStart}
              voteEnd={this.state.voteEnd}
              // contractadd={this.state.contractadd} 
              />
          }
        </div>
      </div>
    )
  }
}

export default Dashboard;