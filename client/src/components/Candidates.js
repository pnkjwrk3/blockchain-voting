import React from 'react'
import Chart from 'react-google-charts';

class Candidates extends React.Component {
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            {/* <th>Votes</th> */}
          </tr>
        </thead>
        <tbody >
          {this.props.candidates.map((candidate) => {
            return(
              <tr>
                <th>{candidate.id.toNumber()}</th>
                <td>{candidate.name}</td>
                {/* <td>{candidate.voteCount.toNumber()}</td> */}
              </tr>
            )
          })}
        </tbody>
      </table>
      // <Chart
      //   width={'500px'}
      //   height={'300px'}
      //   chartType="PieChart"
      //   loader={<div>Loading Chart</div>}
      //   data={this.props.candidates}
      //   options={{
      //     title: 'Results',
      //   }}
      //   rootProps={{ 'data-testid': '1' }}
      // />
    )
  }
}

export default Candidates
