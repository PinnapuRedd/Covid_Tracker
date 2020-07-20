import React from 'react'
import { Bar } from "react-chartjs-2";

const Chart = ({ data }) => {
    const { positive, negative, recovered, totalTestResults } = data
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
                backgroundColor: 'rgba(52, 152, 219, 0.75)',
                borderWidth: 1,
                backgroundColor: 'rgba(52, 152, 219, 1)',
                hoverBorderColor: "rgba(255,99,132,1)",
            },

        ]



    }

    const options = {
        title: {
            display: true,
            text: 'Bar Chart',
            maintainAspectRatio: false,
        }
    }

    return (
        <div>
            <Bar data={chartDataConfig} options={options} />
        </div>
    )
}

export default Chart
