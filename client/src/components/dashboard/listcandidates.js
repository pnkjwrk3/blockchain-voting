import React from 'react'

class ListCandidates extends React.Component {
  render() {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody >
          {this.props.candidates.map((candidate) => {
            return(
              <tr key={candidate.id-1}>
                <th>{candidate.id.toNumber()}</th>
                <td>{candidate.name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default ListCandidates
