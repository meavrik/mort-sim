import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import './Plan-row.css';
import { Slider } from 'primereact/slider';
import { InputText } from "primereact/inputtext";

const planItems = [
    { label: 'CPI Linkage', value: 1 },
    { label: 'Fixed Rate', value: 2 },

];


const planReturnItems = [
    { label: 'Shpizer', value: 1 },
    { label: 'Shpizer1', value: 2 },
    { label: 'Shpizer2', value: 3 },
];

const planGraceItems = [
    { label: 'None', value: 1 },
    { label: 'Half', value: 2 },
    { label: 'Full', value: 3 },
];

let yearList = new Array(30)

class PlanRow extends Component {
    constructor() {

        super();

        yearList = [...yearList].map((a, index) => { return { label: index + 1, value: index + 1 } });

        this.state = {
            plan: 1,
            planGrace: 1,
            planReturn: 1,
            amount: 0,
            duration: 0,
            intrest: 0,
            years: 10,
            years2: 10,
        }

        this.onChangeSlider = this.onChangeSlider.bind(this);
        this.onChangeSlider2 = this.onChangeSlider2.bind(this);
    }

    onChangeSlider(e) {
        var newValue;
        if (e.target && e.target.nodeName === "INPUT") {
            newValue = e.target.value;
        }
        else {
            newValue = e.value;
        }

        this.setState({ years: newValue });
    }

    onChangeSlider2(e) {
        var newValue;
        if (e.target && e.target.nodeName === "INPUT") {
            newValue = e.target.value;
        }
        else {
            newValue = e.value;
        }

        this.setState({ years2: newValue });
    }

    render() {
        let header = (<div>test</div>);



        // if (this.props.showHeader)
        return (
            <div>
                <div className="plan-row">
                    <div className="drpdown_and_title">
                    {this.props.showHeader ? (<p>id</p>) : (<p></p>)}
                        <p>#{this.props.id}</p>
                    </div>
                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p>Plan</p>) : (<p></p>)}
                        <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.plan} options={planItems} onChange={(e) => { this.setState({ plan: e.value }) }} placeholder="Select a plan" />
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p>Var years</p>) : (<p></p>)}
                        {/* <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.plan} options={yearList} onChange={(e) => { this.setState({ years: e.value }) }} placeholder="var years" /> */}
                        {/* <InputText value={this.state.years} style={{width: '4em'}} type="number" onChange={this.onChangeSlider} /> */}
                        <span className="slider-container">

                            <Slider value={this.state.years} max={30} min={5} onChange={this.onChangeSlider} style={{ width: '4em' }} />
                            <p>{this.state.years}</p>
                        </span>
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p>Return</p>) : (<p></p>)}
                        <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.planReturn} options={planReturnItems} onChange={(e) => { this.setState({ planReturn: e.value }) }} placeholder="Return" />

                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p>Grace</p>) : (<p></p>)}
                        <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.planGrace} options={planGraceItems} onChange={(e) => { this.setState({ planGrace: e.value }) }} placeholder="Grace" />
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p>years</p>) : (<p></p>)}
                        {/* <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.plan} options={yearList} onChange={(e) => { this.setState({ years: e.value }) }} placeholder="var years" /> */}
                        {/*  <InputText disabled={this.state.planGrace===1} value={this.state.years2} style={{width: '4em'}} type="number" onChange={this.onChangeSlider2} /> */}

                        <span className="slider-container">
                            <Slider disabled={this.state.planGrace === 1} value={this.state.years2} max={30} min={5} onChange={this.onChangeSlider2} style={{ width: '4em' }} />
                            <p>{this.state.years2}</p>
                        </span>
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p>Amount</p>) : (<p></p>)}
                        <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.amount} options={planReturnItems} onChange={(e) => { this.setState({ amount: e.value }) }} placeholder="chose amount" />
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p>Duration</p>) : (<p></p>)}
                        <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.duration} options={planReturnItems} onChange={(e) => { this.setState({ duration: e.value }) }} placeholder="chose duration" />
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p>Intrest</p>) : (<p></p>)}
                        <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.intrest} options={planReturnItems} onChange={(e) => { this.setState({ intrest: e.value }) }} placeholder="chose intrest" />
                    </div>
                </div>
            </div>)

        return (<div className="plan-row">
            <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.plan} options={planItems} onChange={(e) => { this.setState({ plan: e.value }) }} placeholder="Select a plan" />
            <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.plan} options={yearList} onChange={(e) => { this.setState({ years: e.value }) }} placeholder="var years" />
            <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.planGrace} options={planGraceItems} onChange={(e) => { this.setState({ planGrace: e.value }) }} placeholder="Grace" />
            <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.planReturn} options={planReturnItems} onChange={(e) => { this.setState({ planReturn: e.value }) }} placeholder="Return" />
        </div>)
    }
}

export default PlanRow;