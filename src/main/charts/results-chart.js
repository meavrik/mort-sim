import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import './results-chart.css';

const options = {
    animation: {
        duration:0
    },
    elements: {
        line: {
            tension: 0, // disables bezier curves
        }
    },
}

const LineChart = (props) => {
    return (
        <div className="chart-container" >
            <div className="chart-inside">
                <Chart type="line" options={options} data={props.data} />
            </div>
        </div>
    )
}

export default LineChart;
