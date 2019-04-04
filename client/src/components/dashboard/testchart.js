import React from 'react'
import Chart from 'react-google-charts';
import { Button } from 'antd';

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
          <h4 style={{ color: "green" }}>Your Vote has been registered successfully</h4>
          <h6>Click below to check results</h6>
          <Button onClick={this.showTable} class='btn btn-primary'>Result</Button>
          {this.state.show && (<div style = {{position:'relative', left:'80px'}}>  <Chart
            width={'700px'}
            height={'400px'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data_temp}
            options={{
              title: 'Results',
              // pieSliceText: 'label',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
          </div> )}
        </div>
      </div>

    )
  }
}

export default TestChart
