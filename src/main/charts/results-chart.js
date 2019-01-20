import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import './results-chart.css';

export class LineChart extends Component {


    constructor() {
        super()

        this.state = {
            options: {
                elements: {
                    line: {
                        tension: 0, // disables bezier curves
                    }
                },

            }
        }


    }

    /* componentDidMount() {
        var ctx = document.getElementById("canvas").getContext("2d");
        ctx.canvas.width = 300;
        ctx.canvas.height = 300;
    } */

    render() {

        return (
            <div className="content-section implementation chart-container" >

                <div className="chart-inside">
                    <Chart type="line" options={this.state.options} data={this.props.data} />
                </div>

            </div>
        )
    }
}


export default LineChart;
