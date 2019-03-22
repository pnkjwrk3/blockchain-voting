import React from 'react'
import Table from './Table'
import Form from './Form'

class Content extends React.Component {
  render() {
    return (
      <div>
        
        { this.props.hasVoted ?
          <Table candidates={this.props.candidates}  />
          : null
        }
        <hr/>
        { !this.props.hasVoted ?
          <Form candidates={this.props.candidates} castVote={this.props.castVote} />
          : null
        }
        <p>Your account: {this.props.account}</p>
      </div>
    )
  }
}

export default Content
