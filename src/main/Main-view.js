import React, { Component } from 'react';
import './Main-view.css';

import { Button } from "primereact/button";
import { SelectButton } from 'primereact/selectbutton';
import PlanRow from './Plan-row';
import LineChart from './charts/results-chart';
import InputValueSlider from './Input-value-slider';
import CardHeader from './components/Card-header';
import { autoConfigItems, scenarioItems } from './consts';

class MainView extends Component {
    constructor() {
        super();
        this.state = {
            initialMortgageAmount: 1000000,
            initialMonthlyAmount: 3000,
            selectedChartData: null,
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

        let numData = Array.from({ length: 20 }, (a, index) => { return index === 19 ? 10 : Math.floor(Math.random() * 500) + this.state.finalMonthly });
        return numData;
    }

    updateChartData() {

        if (!this.state.plans || !this.state.plans.length) return;
        const backgroundColors = ['#42A5F5', '#66BB6A', '#66BB6A'];
        const borderColors = ['#42A5F5', '#66BB6A', '#66BB6A'];

        const dataSets = Array.from({ length: this.state.plans.length }, (a, index) => {
            return {
                label: 'Loan #' + (index + 1),
                data: this.generateData(),
                fill: false,
                backgroundColor: backgroundColors[index],
                borderColor: borderColors[index]
            }
        });
        const years = Array.from({ length: dataSets[0].data.length }, (a, index) => { return 2019 + index });
        let newData = {
            labels: years,
            datasets: dataSets
        }

        this.setState({ selectedChartData: newData });
    }


    getNewPlan = (length) => {
        return {
            id: length,
            plan: 1,
            planGrace: null,
            planReturn: 1,
            //amount: Math.round(this.state.finalAmount / totalPlans),
            amount: 0,
            duration: 10,
            intrest: 0.1,
            years: 10,
            graceYears: 10,
            resultReturn: 0,
            resultTotal: 0,
            resultMonthly: 0,
        }
    }

    componentDidMount() {

        this.setState({ finalAmount: this.state.initialMortgageAmount })
        this.setState({ finalMonthly: this.state.initialMonthlyAmount })

        const totalPlans = 3;

        let plans = Array.from({ length: totalPlans }, (a, index) => this.getNewPlan(index));

        this.setState({ plans: plans });
        this.updateChartData();

        setTimeout(() => {
            this.updatePlans();
        }, 100);
    }

    updatePlans() {
        let plans = [...this.state.plans];

        plans.forEach((plan, index) => {
            plan.id = index + 1
            plan.amount = Math.round(this.state.finalAmount / plans.length).toLocaleString();
            plan.resultMonthly = Math.round(this.state.finalMonthly / plans.length).toLocaleString();
            plan.resultTotal = plan.amount ? plan.amount.toLocaleString() : '0'
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

        this.updatePlans();
    }

    addNewTrack = () => {
        let newPlans = [...this.state.plans];
        newPlans.push(this.getNewPlan(newPlans.length + 1))
        this.setState({ plans: newPlans });

        setTimeout(() => {
            this.updatePlans();
        }, 100);
    }

    onRemoveTrack(event, id) {
        if (this.state.plans.length > 1) {
            let newPlans = [...this.state.plans];
            newPlans.splice(id - 1, 1);

            this.setState({ plans: newPlans });

            setTimeout(() => {
                this.updatePlans();
            }, 100);
        }
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
                        <CardHeader title='Mortgage tracks'></CardHeader>
                        <div className="card-content">
                            <div>
                                <div>
                                    {this.state.plans.map(data => {
                                        return (
                                            <PlanRow
                                                id={data.id}
                                                key={data.id}
                                                data={data}
                                                showHeader={data.id === 1}
                                                onParamChange={(event) => this.onParamChange(event, data)}
                                                changeSlider={(event) => this.onSliderChange(event, data, 'years')}
                                                changeSlider2={(event) => this.onSliderChange(event, data, 'graceYears')}
                                                removeTrack={(event) => this.onRemoveTrack(event, data.id)}
                                            >
                                            </PlanRow>);
                                    })
                                    }
                                </div>
                                <div style={{ margin: '5px 0' }}>
                                    <Button style={{ width: '100%' }} className="p-button-secondary p-button-raised" onClick={this.addNewTrack} icon="pi pi-plus" label="add track" />
                                </div>
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
                                    //this.setState({ selectedChartData: dataSets[e.value] });
                                    this.updateChartData()
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
