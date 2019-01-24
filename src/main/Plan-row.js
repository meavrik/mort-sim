import React, { Component } from 'react';
import { Dropdown } from 'primereact/dropdown';
import './Plan-row.css';
import { Slider } from 'primereact/slider';
import { InputText } from "primereact/inputtext";
import { Spinner } from 'primereact/spinner';
import { planItems, planReturnItems, planGraceItems } from './consts'

const PlanRow = (props) => {
    return (
        <div>
            <div className="plan-row">
                <div className="drpdown_and_title">
                    {props.showHeader ? (<p className='column-title'>id</p>) : (<span />)}
                    <p style={{ margin: '8px' }}>{props.data.id + 1}</p>
                </div>
                <div className="drpdown_and_title">
                    {props.showHeader ? (<p className='column-title'>Plan</p>) : (<span />)}

                    <Dropdown name='plan' tooltip='lorem ipsum' showClear={true} value={props.data.plan} options={planItems} onChange={props.onParamChange} placeholder="Select a plan" />
                </div>

                <div className="drpdown_and_title">
                    {props.showHeader ? (<p className='column-title'>Var years</p>) : (<span />)}

                    <span className="slider-container">
                        <Slider name='years' value={props.data.years} max={30} min={5} onChange={props.changeSlider} style={{ width: '4em' }} />
                        <p>{props.data.years}</p>
                    </span>
                </div>

                <div className="drpdown_and_title">
                    {props.showHeader ? (<p className='column-title'>Return</p>) : (<span />)}
                    <Dropdown name='planReturn' tooltip='lorem ipsum' showClear={true} value={props.data.planReturn} options={planReturnItems} onChange={props.onParamChange} placeholder="Select return" />

                </div>

                <div className="drpdown_and_title">
                    {props.showHeader ? (<p className='column-title'>Grace</p>) : (<span />)}
                    <Dropdown name='planGrace' tooltip='lorem ipsum' showClear={true} value={props.data.planGrace} options={planGraceItems} onChange={props.onParamChange} placeholder="None" />
                </div>

                <div className="drpdown_and_title" >
                    {props.showHeader ? (<p className='column-title'>years</p>) : (<span />)}

                    <span className="slider-container" style={{ opacity: props.data.planGrace ? 1 : 0.3 }}>
                        <Slider disabled={!props.data.planGrace} value={props.data.graceYears} max={30} min={5} onChange={props.changeSlider2} style={{ width: '4em' }} />
                        <p>{props.data.graceYears}</p>
                    </span>
                </div>

                <div className="drpdown_and_title">
                    {props.showHeader ? (<p className='column-title'>Amount</p>) : (<span />)}
                    <Spinner name='amount' value={props.data.amount} step={100} max={10000000} min={100} onChange={props.onParamChange} style={{ width: '8em', marginLeft: '5px' }} />
                </div>

                <div className="drpdown_and_title">
                    {props.showHeader ? (<p className='column-title'>Duration</p>) : (<span />)}
                    <Spinner name='duration' value={props.data.duration} max={30} min={2} onChange={props.onParamChange} style={{ width: '5em', marginLeft: '5px' }} />
                </div>

                <div className="drpdown_and_title">
                    {props.showHeader ? (<p className='column-title'>Intrest</p>) : (<span />)}
                    <Spinner name='intrest' value={props.data.intrest} step={0.01} max={10} min={-10} onChange={props.onParamChange} style={{ width: '5em', marginLeft: '5px' }} />
                </div>

                <div className="result-section">
                    <div className="drpdown_and_title">
                        {props.showHeader ? (<p className='column-title'>Monthly</p>) : (<span />)}
                        <InputText disabled={!props.resultMonthly} value={props.data.resultMonthly} style={{ width: '6em' }} type="number" />
                    </div>

                    <div className="drpdown_and_title">
                        {props.showHeader ? (<p className='column-title'>Total</p>) : (<span />)}
                        <InputText disabled={!props.data.resultTotal} value={props.data.resultTotal} style={{ width: '6em' }} type="number" />
                    </div>

                    <div className="drpdown_and_title">
                        {props.showHeader ? (<p className='column-title'>Return %</p>) : (<span />)}
                        <InputText disabled={!props.data.resultReturn} value={props.data.resultReturn} style={{ width: '6em' }} type="number" />
                    </div>
                </div>

            </div>
        </div>)
}

export default PlanRow;