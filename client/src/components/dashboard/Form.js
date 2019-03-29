import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        this.props.castVote(this.candidateId.value)
      }}>
        <div className='form-group'>
          <label>Select Candidate</label>
          <select ref={(input) => this.candidateId = input} className='form-control'>
            <option value="0" disabled>Select candidate </option>
            {this.props.candidates.map((candidate) => {
              return <option value={candidate.id}>{candidate.name}</option>
            })}
          </select>
        </div>
        <button type='submit' class='btn btn-primary'>Vote</button>
        <hr />
      </form>
    )
  }
}

export default Form
