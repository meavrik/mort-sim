import React, { Component } from 'react';
import './Main-view.css';

import { Button } from "primereact/button";
import { SelectButton } from 'primereact/selectbutton';
import PlanRow from './Plan-row';
import LineChart from './charts/results-chart';
import InputValueSlider from './Input-value-slider';
import CardHeader from './components/Card-header';
import { autoConfigItems, scenarioItems } from './consts';


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

class MainView extends Component {
    constructor() {
        super();
        this.state = {
            initialMortgageAmount: 1000000,
            initialMonthlyAmount: 3000,
            selectedChartData: dataSets[0],
            type: 1,
            secnario: 0,
            username: null,
            price: null,
            amount: 600000,

            finalAmount: 1000000,
            finalMonthly: 3000,
            finalIntrest: 14,
            finalReturnAmount: 2200000,
            plans: [
            ]
        }

        this.handleFullAmountChange = this.handleFullAmountChange.bind(this);
        this.handleMonthlyAmountChange = this.handleMonthlyAmountChange.bind(this);
        this.updatePlans = this.updatePlans.bind(this);
        this.updateChartData = this.updateChartData.bind(this);
    }

    generateData = () => {

        let numData = Array.from({ length: 8 }, () => Math.floor(Math.random() * 40));
        return numData;
    }

    updateChartData() {

        let newData = {
            labels: ['2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026'],

            datasets: [
                {
                    label: 'Plan #1',
                    data: this.generateData(),
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                },
                {
                    label: 'Plan #2',
                    data: this.generateData(),
                    fill: false,
                    backgroundColor: '#66BB6A',
                    borderColor: '#66BB6A'
                }
                ,
                {
                    label: 'Plan #3',
                    data: this.generateData(),
                    fill: false,
                    backgroundColor: '#66BB6A',
                    borderColor: '#66BB6A'
                }
            ]
        }

        this.setState({ selectedChartData: newData });
    }

    componentDidMount() {

        this.setState({ finalAmount: this.state.initialMortgageAmount })
        this.setState({ finalMonthly: this.state.initialMonthlyAmount })

        const totalPlans = 3;

        let plans = []
        for (let i = 0; i < totalPlans; i++) {
            let newPlan = {
                id: i,
                plan: 1,
                planGrace: null,
                planReturn: 1,
                amount: Math.round(this.state.finalAmount / totalPlans),
                duration: 10,
                intrest: 0.1,
                years: 10,
                graceYears: 10,
                resultReturn:0,
                resultTotal:0,
                resultMonthly:0,
            }
            plans.push(newPlan);
        }

        this.setState({ plans: plans });
    }

    updatePlans() {
        let plans = [...this.state.plans];

        plans.forEach(plan => {
            plan.amount = Math.round(this.state.finalAmount / plans.length);

            plan.resultMonthly = Math.round(this.state.finalMonthly / plans.length);
            plan.resultTotal = plan.amount;
            plan.resultReturn = plan.intrest;
        })

        this.setState({ plans: plans });
        
        this.updateChartData();
    }

    handleFullAmountChange(event) {
        this.setState({ finalAmount: event })
        this.setState({ finalReturnAmount: Math.floor(event * 1.4) });

        this.updatePlans();
    }

    handleMonthlyAmountChange(event) {
        this.setState({ finalMonthly: event });

        this.updatePlans();
    }

    onSliderChange(event, data, param) {

        let newPlans = [...this.state.plans];
        newPlans.filter(a => a === data).forEach(a => { data[param] = event.value })
        this.setState({ plans: newPlans });
    }

    onParamChange(event, data) {

        let newPlans = [...this.state.plans];
        newPlans.filter(a => a === data).forEach(a => { data[event.target.name] = event.value })
        this.setState({ plans: newPlans });

       
        //this.updateChartData();
        this.updatePlans();
    }

    render() {

        return (
            <div>
                <div className="content-section implementation">

                    <div className="p-grid p-fluid row" >

                        <CardHeader title='Mortgage details'></CardHeader>

                        <div className="card-content">
                            <InputValueSlider onChange={this.handleFullAmountChange} minValue={30000} maxValue={10000000} amount={this.state.initialMortgageAmount} title='Select Mortgage amount'></InputValueSlider>
                            <InputValueSlider onChange={this.handleMonthlyAmountChange} minValue={500} maxValue={10000} amount={this.state.initialMonthlyAmount} title='Monthly payment'></InputValueSlider>
                        </div>
                    </div>

                    <header className="plan-header">

                        <SelectButton value={this.state.type} options={autoConfigItems} onChange={(e) => {
                            this.setState({ type: e.value });
                            this.state.plans.forEach(a => {
                                a.planReturn = Math.round(Math.random() * 3) + 1;
                                a.plan = Math.round(Math.random() * 2) + 1;

                            })
                        }
                        }></SelectButton>

                        <Button className="p-button-raised btn" icon="pi pi-cog" />
                        <Button className="p-button-raised btn" icon="pi pi-bookmark" />

                    </header>

                    <div className="p-grid p-fluid">
                        {/* <header className="card-title">Mortgage plans</header> */}
                        <CardHeader title='Mortgage plans'></CardHeader>
                        <div className="card-content">
                            <div>
                                {this.state.plans.map(data => {
                                    return (
                                        <PlanRow
                                            id={data.id}
                                            key={data.id}
                                            data={data}
                                            showHeader={!data.id}
                                            onParamChange={(event) => this.onParamChange(event, data)}
                                            changeSlider={(event) => this.onSliderChange(event, data, 'years')}
                                            changeSlider2={(event) => this.onSliderChange(event, data, 'graceYears')}
                                        >
                                        </PlanRow>);
                                })
                                }
                            </div>
                        </div>
                    </div>

                    <div className="p-grid p-fluid">
                        {/* <header className="card-title">Your loan summary</header> */}
                        <CardHeader title='Your loan summary'></CardHeader>
                        <div className="card-content" style={{ justifyContent: 'space-evenly' }}>
                            <div>
                                <h3>total amount</h3>
                                <p className="amount-label">{this.state.finalAmount.toLocaleString()}</p>
                            </div>

                            <div>
                                <h3>monthly payment</h3>
                                <p className="amount-label">{this.state.finalMonthly.toLocaleString()}</p>
                            </div>

                            <div>
                                <h3>total return </h3>
                                <p className="amount-label">{this.state.finalReturnAmount.toLocaleString()}</p>
                            </div>

                            <div>
                                <h3>intrest </h3>
                                <p className="amount-label">{this.state.finalIntrest}%</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-grid p-fluid">
                        {/* <header className="card-title">Loan Payments Prediction</header> */}
                        <CardHeader title='Loan Payments Prediction'></CardHeader>
                        <div className="card-content" style={{ display: 'block' }}>
                            <div className="plan-header">
                                <SelectButton value={this.state.secnario} options={scenarioItems} onChange={(e) => {
                                    this.setState({ secnario: e.value });
                                    this.setState({ selectedChartData: dataSets[e.value] });
                                }}></SelectButton>

                                <Button tooltip='Edit Scenario' style={{ marginLeft: '5px' }} icon="pi pi-pencil" />
                                <Button tooltip='Load Scenario' style={{ marginLeft: '5px' }} icon="pi pi-folder-open" />
                            </div>

                            <LineChart data={this.state.selectedChartData}></LineChart>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default MainView;
