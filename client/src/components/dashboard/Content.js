import React from 'react'
import TestChart from './testchart'
import Form from './Form'
import ListCandidates from './listcandidates'

class Content extends React.Component {
  render() {
    return (
      <div>
        
        { this.props.hasVoted || this.props.voteEnd?
          // <h4 style={{ color: "green" }}>Your Vote has been registered successfully</h4>
          <TestChart candidates={this.props.candidates} hasVoted={this.props.hasVoted} voteEnd={this.props.voteEnd}  />
          // :null
          : <ListCandidates candidates={this.props.candidates}  />
        }
        <hr/>
        { !this.props.voteStart ?
          <h2 style={{ color: "green" }}>Voting hasn't started yet.</h2>
          : null
        }
        { !this.props.hasVoted && !this.props.voteEnd?
          <Form candidates={this.props.candidates} castVote={this.props.castVote} />
          : null
        }
        {/* {
          this.props.voteEnd ?
          <TestChart candidates={this.props.candidates}  />
          :null
        } */}
        <p>Your account: {this.props.account}</p>
        {/* <p>Contract address:{this.props.contractadd}</p> */}
      </div>
    )
  }
}

export default Content
