import React from 'react'
import TestChart from './testchart'
import Form from './Form'
import ListCandidates from './listcandidates'

class Content extends React.Component {
  render() {
    return (
      <div>
        
        { this.props.hasVoted || this.props.voteEnd?
          <TestChart candidates={this.props.candidates} hasVoted={this.props.hasVoted} voteEnd={this.props.voteEnd}  />
          : <ListCandidates candidates={this.props.candidates}  />
        }
        <hr/>
        { !this.props.voteStart ?
          <h2 style={{ color: "green" }}>Voting hasn't started yet.</h2>
          : null
        }
        { !this.props.hasVoted && !this.props.voteEnd && this.props.voteStart?
          <Form candidates={this.props.candidates} castVote={this.props.castVote} />
          : null
        }
        <p>Constituency name:{this.props.constname}</p>
        <p>Your account: {this.props.account}</p>
      </div>
    )
  }
}

export default Content
