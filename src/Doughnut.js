import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const DoughnutChart = {
  labels: ['Angular', 'React', 'springboot','Javascipt','Typescipt', 'nodejs'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [5, 5, 3, 3, 5,2]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
      

        <Doughnut
          data={DoughnutChart}
          options={{
            title:{
              display:true,
              text:'Tech Stack',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}