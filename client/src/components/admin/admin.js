import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import TruffleContract from 'truffle-contract'
import jwt_decode from 'jwt-decode'
import browserSolc from 'browser-solc';



var contractCode = "pragma solidity^0.5.0;contract Election{struct Candidate{uint id;string name;uint voteCount;} address public owner;string public electionName;uint public candidatesCount;bool public votingEnded;bool public votingStarted;mapping(uint=>Candidate)public candidates;mapping(address=>bool)public voters;modifier ownerOnly(){require(msg.sender==owner);_;} constructor(string memory _name)public{owner=msg.sender;electionName=_name;} event votedEvent(uint indexed _candidateId);function addCandidate(string memory name)ownerOnly public{require(!votingStarted);candidatesCount++;candidates[candidatesCount]=Candidate(candidatesCount,name,0);} function vote(uint _candidateId)public{require(!voters[msg.sender]);require(!votingEnded);require(votingStarted);require(!(msg.sender==owner));require(_candidateId>0&&_candidateId<=candidatesCount);voters[msg.sender]=true;candidates[_candidateId].voteCount+=1;emit votedEvent(_candidateId);} function begin()ownerOnly public{require(msg.sender==owner);votingStarted=true;} function end()ownerOnly public{require(msg.sender==owner);votingEnded=true;}}"

class Admin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            account: '0xAfa64655DFFe7383E0E7F4Ed912DB84b608C2CAA',
            candidates: [],
            contractadd: '0x'
        }

        // uncomment the following code before deploy
        // if (typeof window.web3 !== 'undefined') {
        //     this.web3Provider = window.web3.currentProvider
        // } else {
        //     this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545')
        // }
        this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545') //comment this before deploy

        this.web3 = new Web3(this.web3Provider)
    }

    deployContract = () => {
        browserSolc.getVersions(function(soljsonSources, soljsonReleases) {
            console.log(soljsonSources);
            console.log(soljsonReleases);
          });

    }

    render() {
        return (
            <div>
                <h1>Admin</h1>
                <button onClick={this.deployContract}>deploy</button>
            </div>

        )
    }
}

export default Admin;