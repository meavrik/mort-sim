import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export class LineChart extends Component {

    render() {
        const data = {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025','2026'],
            datasets: [
                {
                    label: 'Plan #1',
                    data: [65, 59, 60, 61, 56, 55, 40,0],
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Plan #2',
                    data: [28, 48, 40, 19, 21, 27, 90,0],
                    fill: false,
                    backgroundColor: '#66BB6A',
                    borderColor: '#66BB6A'
                }
                ,
                {
                    label: 'Plan #2',
                    data: [13, 45, 42, 17, 18, 21,15,0],
                    fill: false,
                    backgroundColor: '#66BB6A',
                    borderColor: '#66BB6A'
                }
            ]   
        };

        const multiAxisData = {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
			datasets: [{
                label: 'Dataset 1',
                fill: false,
				backgroundColor: '#42A5F5',
                borderColor: '#42A5F5',
				yAxisID: 'y-axis-1',
				data: [65, 59, 80, 81, 56, 55, 10]
			}, {
                label: 'Dataset 2',
                fill: false,
				backgroundColor: '#66BB6A',
                borderColor: '#66BB6A',
				yAxisID: 'y-axis-2',
				data: [28, 48, 40, 19, 86, 27, 90]
			}]
        };

        const multiAxisOptions = {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            }
        }

        const lineStylesData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderDash: [5, 5],
                    borderColor: '#66BB6A'
                },
                {
                    label: 'Third Dataset',
                    data: [12, 51, 62, 33, 21, 62, 45],
                    fill: true,
                    borderColor: '#FFA726',
                    backgroundColor: '#FFCC80'
                }
            ]   
        };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                      
                        <p>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</p>
                    </div>
                </div>

                <div className="content-section implementation">
 
                    <Chart type="line" data={data} />
                </div>
            </div>
        )
    }
}


export default LineChart;
