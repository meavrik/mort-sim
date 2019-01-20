import React, { Component } from 'react';
import './Main-view.css';

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";

import { SelectButton } from 'primereact/selectbutton';
import PlanRow from './Plan-row';
import LineChart from './charts/results-chart';
import InputValueSlider from './Input-value-slider';

const dataSets = [
    {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],

        datasets: [
            {
                label: 'Plan #1',
                data: [30, 29, 20, 21, 26, 25, 20, 0],
                fill: false,
                backgroundColor: '#42A5F5',
                borderColor: '#42A5F5'
            },
            {
                label: 'Plan #2',
                data: [30, 48, 40, 19, 21, 27, 18, 0],
                fill: false,
                backgroundColor: '#66BB6A',
                borderColor: '#66BB6A'
            }
            ,
            {
                label: 'Plan #3',
                data: [30, 45, 42, 17, 18, 21, 15, 0],
                fill: false,
                backgroundColor: '#66BB6A',
                borderColor: '#66BB6A'
            }
        ]
    }, {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [
            {
                label: 'Plan #1',
                data: [5, 5, 5, 5, 5, 5, 5, 0],
                fill: false,
                backgroundColor: '#42A5F5',
                borderColor: '#42A5F5'
            },
            {
                label: 'Plan #2',
                data: [30, 48, 40, 19, 21, 27, 18, 0],
                fill: false,
                backgroundColor: '#66BB6A',
                borderColor: '#66BB6A'
            }
            ,
            {
                label: 'Plan #3',
                data: [30, 45, 42, 17, 18, 21, 15, 0],
                fill: false,
                backgroundColor: '#66BB6A',
                borderColor: '#66BB6A'
            }
        ]
    }, {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],
        datasets: [
            {
                label: 'Plan #1',
                data: [5, 5, 5, 5, 5, 5, 5, 0],
                fill: false,
                backgroundColor: '#42A5F5',
                borderColor: '#42A5F5'
            },
            {
                label: 'Plan #2',
                data: [15, 48, 15, 19, 21, 27, 18, 0],
                fill: false,
                backgroundColor: '#66BB6A',
                borderColor: '#66BB6A'
            }
            ,
            {
                label: 'Plan #3',
                data: [30, 15, 32, 17, 18, 21, 15, 0],
                fill: false,
                backgroundColor: '#66BB6A',
                borderColor: '#66BB6A'
            }
        ]
    }
]




const selectItems = [
    { label: 'User Defined', value: 'User Defined' },
    { label: 'No risk', value: 'No risk' },
    { label: 'Low Risk', value: 'Low Risk' },
    { label: 'Low Risk+', value: 'Low Risk+' },
    { label: 'Balanced', value: 'Balanced' },
    { label: 'Bank', value: 'Bank' },
    { label: 'Reconmended for you', value: 'Reconmended' }
];

const senarioItems = [
    { label: 'Optemistic', value: 0, icon: 'fas fa-sad-tear' },
    { label: 'Reasonable', value: 1 },
    { label: 'Pessimistic', value: 2 },
];



class MainView extends Component {
    constructor() {
        super();
        this.state = {

            selectedChartData: dataSets[0],
            type: 'User Defined',
            secnario: 0,
            username: null,
            price: null,
            amount: 600000,

            finalAmount:2000000,
            finalMonthly:6000,
            finalIntrest:14,
            finalReturnAmount:2200000,
        }
    }

    render() {

        return (
            <div>
                <div className="content-section implementation">


                    <div className="p-grid p-fluid row" >
                        <header className="card-title">Mortgage details</header>

                        <div className="card-content">
                            <InputValueSlider minValue={30000} maxValue={20000000} title='Select Mortgage amount'></InputValueSlider>
                            <InputValueSlider minValue={100} maxValue={100000} title='Monthly payment'></InputValueSlider>
                        </div>
                    </div>

                    <header className="plan-header">

                        <SelectButton value={this.state.type} options={selectItems} onChange={(e) => this.setState({ type: e.value })}></SelectButton>

                        <Button className="p-button-raised btn" icon="pi pi-cog" />
                        <Button className="p-button-raised btn" icon="pi pi-bookmark" />

                    </header>

                    <div className="p-grid p-fluid">
                        <header className="card-title">Mortgage plans</header>
                        <div className="card-content">
                            <div>
                                <PlanRow id={1} showHeader='true'></PlanRow>
                                <PlanRow id={2}></PlanRow>
                                <PlanRow id={3}></PlanRow>
                            </div>
                        </div>
                    </div>

                    <div className="p-grid p-fluid">
                        <header className="card-title">Total load details</header>
                        <div className="card-content" style={{justifyContent:'space-evenly'}}>
                            <div>
                                <h3>total amount : </h3>
                                <p>{this.state.finalAmount.toLocaleString()}</p>
                            </div>

                            <div>
                                <h3>monthly payment : </h3>
                                <p>{this.state.finalMonthly.toLocaleString()}</p>
                            </div>

                            <div>
                                <h3>total return : </h3>
                                <p>{this.state.finalReturnAmount.toLocaleString()}</p>
                            </div>

                            <div>
                                <h3>intrest : </h3>
                                <p>{this.state.finalIntrest}%</p>
                            </div>
                        </div>
                    </div>



                    <div className="p-grid p-fluid">
                        <header className="card-title">Total payments</header>
                        <div className="card-content" style={{ display: 'block' }}>
                            <div className="plan-header">
                                <SelectButton value={this.state.secnario} options={senarioItems} onChange={(e) => {
                                    this.setState({ secnario: e.value });
                                    this.state.selectedChartData = dataSets[e.value]
                                }}></SelectButton>

                                <Button tooltip='Edit Scenario' style={{ marginLeft: '5px' }} icon="pi pi-pencil" />
                                <Button tooltip='Load Scenario' style={{ marginLeft: '5px' }} icon="pi pi-folder-open" />
                            </div>

                            <LineChart data={this.state.selectedChartData}></LineChart>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;
