import React from 'react'
import Chart from 'react-google-charts';
//import { Button } from 'antd';
import Table from './Table'

class TestChart extends React.Component {

  state ={
    show: false
  }


  showTable= () =>  {
    this.setState({
      show: true
    });
  }

  render() {
    var data_temp = [['Name', 'Count']];
    this.props.candidates.forEach(candidate => {
      data_temp.push([candidate.name, candidate.voteCount.toNumber()]);
    });

    return (
      <div >
        <div >
        {this.props.hasVoted
          ?<h4 style={{ color: "green" }}>Your Vote has been registered successfully</h4>
          :<h4 style={{ color: "green" }}>You forgot to vote.</h4>}
          
          {!this.props.voteEnd
          ?<h6>Wait for voting to end to see results.</h6>
          :<button onClick={this.showTable} class='btn btn-primary'>Result</button>}
          
          {this.state.show && (<div style = {{position:'relative', left:'80px', top:'5px'}}>  <Chart
            width={'700px'}
            height={'400px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data_temp}
            options={{
              title: 'Results'
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          </div> )}
          {this.state.show && (<div style = {{position:'relative', left:'80px', top:'5px'}}> 
           <Table candidates={this.props.candidates}></Table>
          </div> )}
        </div>
      </div>

    )
  }
}

export default TestChart
