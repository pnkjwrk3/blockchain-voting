import React from 'react'
import TestChart from './testchart'
import Form from './Form'
import ListCandidates from './listcandidates'

class Content extends React.Component {
  render() {
    return (
      <div>
        
        { this.props.hasVoted ?
          <TestChart candidates={this.props.candidates}  />
          // :null
          : <ListCandidates candidates={this.props.candidates}  />
        }
        <hr/>
        { !this.props.hasVoted ?
          <Form candidates={this.props.candidates} castVote={this.props.castVote} />
          : null
        }
        <p>Your account: {this.props.account}</p>
        {/* <p>Contract address:{this.props.contractadd}</p> */}
      </div>
    )
  }
}

export default Content
