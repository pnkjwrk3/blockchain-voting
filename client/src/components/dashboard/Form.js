import React from 'react'

import { Radio } from 'antd';
const RadioGroup = Radio.Group;

class Form extends React.Component {
  state ={
    voteId:0
  }
  onChange = (nr) =>  {
    console.log('radio checked', nr.target.value);
    this.setState({
      voteId: nr.target.value
    });
  }
  render() {
    const radioStyle = {
      display: 'flex',
      fontSize:'20px',
      flexDirection: 'row',
      paddingLeft:'500px',
    };
    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        // this.props.castVote(this.candidateId.value)
        this.props.castVote(this.state.voteId)
      }}>
        <div className='form-vertical'>
          <label style={{fontSize:'30px'}}>Select Candidate</label>
          {/* <select ref={(input) => this.candidateId = input} className='form-control'>
            <option disabled selected>---Select candidate---</option>
            {this.props.candidates.map((candidate) => {
              return <option value={candidate.id}>{candidate.name}</option>
            })}
          </select> */}
          <RadioGroup onChange={this.onChange} value={this.state.voteId}>
          {this.props.candidates.map((candidate) => {
              return <Radio style={radioStyle} value={candidate.id}>{candidate.name}</Radio>
            })}
          </RadioGroup>
        </div>
        <button type='submit' class='btn btn-primary'>Vote</button>
        <hr />
      </form>
    )
  }
}

export default Form
