import React from 'react'
import { Line } from "react-chartjs-2";

const Chart = ({data}) => {
    const {positive, negative, recovered, totalTestResults} = data
    console.log(data.hospitalizedCurrently);
    
    const dataStructure = {
        positive,
        negative,
         recovered,
        total: totalTestResults,
    }
     
    const chartDataConfig = {
        labels: Object.keys(dataStructure),
        datasets: [
            {
                data: Object.values(dataStructure),
                label: "COVID-19 Test Results",
                backgroundColor: 'rgba(52, 152, 219, 0.75)',
                 borderWidth: 1,
                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                hoverBorderColor: "rgba(255,99,132,1)",
             }
        ]
    };
    const options ={
        title:{
            display:true,
            text:'Line Chart'
        }
    }

    return (
        <div>
            <Line data={chartDataConfig} options={options}/>
        </div>
    )
}

export default Chart;
