import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import './Plan-row.css';
import { Slider } from 'primereact/slider';
import { InputText } from "primereact/inputtext";
import { Spinner } from 'primereact/spinner';

const planItems = [
    { label: 'CPI Linkage', value: 1 },
    { label: 'Fixed Rate', value: 2 },

];

const planReturnItems = [
    { label: 'Shpizer', value: 1 },
    { label: 'Equal Principal', value: 2 },
    { label: 'Built', value: 3 },
];

const planGraceItems = [
    { label: 'Partial', value: 1 },
    { label: 'Full', value: 2 },
];

let yearList = new Array(30)

class PlanRow extends Component {
    constructor(props) {

        super(props);

        yearList = [...yearList].map((a, index) => { return { label: index + 1, value: index + 1 } });

        this.state = {
            plan: 1,
            planGrace: null,
            planReturn: 1,
            amount: 10000,
            duration: 10,
            intrest: 0.1,
            years: 10,
            years2: 10,

            resultMonthly: 0,
            resultTotal: 0,
            resultReturn: 0,
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

    componentDidMount() {
        this.setState({ planGrace: this.props.data.planGrace })
        this.setState({ planReturn: this.props.data.planReturn })
        this.setState({ plan: this.props.data.plan })
        //this.setState({ amount: this.props.data.amount })
        this.setState({ years: this.props.data.years })
        this.setState({ years2: this.props.data.years2 })
        this.setState({ intrest: this.props.data.intrest })
    }

    componentWillReceiveProps() {
        this.setState({ amount: this.props.data.amount })
    }

    render() {
        // let header = (<div>test</div>);
        const data = this.props.data;
        // if (this.props.showHeader)
        return (
            <div>
                <div className="plan-row">
                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p className='column-title'>id</p>) : (<p></p>)}
                        <p style={{ marginLeft: '10px' }}>#{this.props.id}</p>
                    </div>
                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p className='column-title'>Plan</p>) : (<p></p>)}
                        <Dropdown tooltip='lorem ipsum' showClear={true} value={data.plan} options={planItems} onChange={(e) => { this.setState({ plan: e.value }) }} placeholder="Select a plan" />
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p className='column-title'>Var years</p>) : (<p></p>)}
                        {/* <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.plan} options={yearList} onChange={(e) => { this.setState({ years: e.value }) }} placeholder="var years" /> */}
                        {/* <InputText value={this.state.years} style={{width: '4em'}} type="number" onChange={this.onChangeSlider} /> */}
                        <span className="slider-container">

                            <Slider value={this.state.years} max={30} min={5} onChange={this.onChangeSlider} style={{ width: '4em' }} />
                            <p>{this.state.years}</p>
                        </span>
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p className='column-title'>Return</p>) : (<p></p>)}
                        <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.planReturn} options={planReturnItems} onChange={(e) => { this.setState({ planReturn: e.value }) }} placeholder="Select return" />

                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p className='column-title'>Grace</p>) : (<p></p>)}
                        <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.planGrace} options={planGraceItems} onChange={(e) => { this.setState({ planGrace: e.value }) }} placeholder="None" />
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p className='column-title'>years</p>) : (<p></p>)}
                        {/* <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.plan} options={yearList} onChange={(e) => { this.setState({ years: e.value }) }} placeholder="var years" /> */}
                        {/*  <InputText disabled={this.state.planGrace===1} value={this.state.years2} style={{width: '4em'}} type="number" onChange={this.onChangeSlider2} /> */}

                        <span className="slider-container">
                            <Slider disabled={!data.planGrace} value={this.state.years2} max={30} min={5} onChange={this.onChangeSlider2} style={{ width: '4em' }} />
                            <p>{this.state.years2}</p>
                        </span>
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p className='column-title'>Amount</p>) : (<p></p>)}
                        {/* <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.amount} options={planReturnItems} onChange={(e) => { this.setState({ amount: e.value }) }} placeholder="chose amount" /> */}

                        {/* <InputText value={this.state.amount.toLocaleString()} placeholder="amount" onChange={this.onChangeSlider} style={{ width: '4em' }}/> */}
                        <Spinner value={this.state.amount} step={100} max={10000000} min={100} onChange={(e) => this.setState({ amount: e.value })} style={{ width: '8em', marginLeft: '5px' }} />
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p className='column-title'>Duration</p>) : (<p></p>)}
                        <Spinner value={this.state.duration} max={30} min={2} onChange={(e) => this.setState({ duration: e.value })} style={{ width: '5em', marginLeft: '5px' }} />
                    </div>

                    <div className="drpdown_and_title">
                        {this.props.showHeader ? (<p className='column-title'>Intrest</p>) : (<p></p>)}
                        <Spinner value={this.state.intrest} step={0.01} max={10} min={-10} onChange={(e) => this.setState({ intrest: e.value })} style={{ width: '5em', marginLeft: '5px' }} />
                    </div>


                    <div className="result-section">
                        <div className="drpdown_and_title">
                            {this.props.showHeader ? (<p className='column-title'>Monthly</p>) : (<p></p>)}
                            <InputText disabled={!this.state.resultMonthly} value={this.state.resultMonthly} style={{ width: '4em', marginLeft: '15px' }} type="number" />
                        </div>

                        <div className="drpdown_and_title">
                            {this.props.showHeader ? (<p className='column-title'>Total</p>) : (<p></p>)}
                            <InputText disabled={!this.state.resultTotal} value={this.state.resultTotal} style={{ width: '4em', marginLeft: '15px' }} type="number" />
                        </div>

                        <div className="drpdown_and_title">
                            {this.props.showHeader ? (<p className='column-title'>Return %</p>) : (<p></p>)}
                            <InputText disabled={!this.state.resultReturn} value={this.state.resultReturn} style={{ width: '4em', marginLeft: '15px' }} type="number" />
                        </div>
                    </div>

                </div>
            </div>)

        /* return (<div className="plan-row">
            <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.plan} options={planItems} onChange={(e) => { this.setState({ plan: e.value }) }} placeholder="Select a plan" />
            <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.plan} options={yearList} onChange={(e) => { this.setState({ years: e.value }) }} placeholder="var years" />
            <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.planGrace} options={planGraceItems} onChange={(e) => { this.setState({ planGrace: e.value }) }} placeholder="Grace" />
            <Dropdown tooltip='lorem ipsum' showClear={true} value={this.state.planReturn} options={planReturnItems} onChange={(e) => { this.setState({ planReturn: e.value }) }} placeholder="Return" />
        </div>) */
    }
}

export default PlanRow;