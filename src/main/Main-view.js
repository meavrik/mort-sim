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

const selectItems = [
    { label: 'User Defined', value: 'User Defined' },
    { label: 'No risk', value: 'No risk' },
    { label: 'Low Risk', value: 'Low Risk' },
    { label: 'Low Risk+', value: 'Low Risk+' },
    { label: 'Balanced', value: 'Balanced' },
    { label: 'Bank', value: 'Bank' },
    { label: 'Reconmended for you', value: 'Reconmended' }
];

class MainView extends Component {
    constructor() {
        super();
        this.state = {
            type: 'User Defined',
            username: null,
            price: null,
            amount: 600000,
        }
    }

    render() {
        return (
            <div>


                <div className="content-section implementation">
                    <header className="plan-header">
                        <SelectButton value={this.state.type} options={selectItems} onChange={(e) => this.setState({ type: e.value })}></SelectButton>

                        <Button className="p-button-raised btn" icon="pi pi-cog" />
                        <Button className="p-button-raised btn" icon="pi pi-bookmark" />
                    </header>

                    <div className="p-grid p-fluid row" >

                       <InputValueSlider minValue={30000} maxValue={20000000} title='Select Mortgage amount'></InputValueSlider>
                       <InputValueSlider minValue={100} maxValue={100000} title='Monthly payment'></InputValueSlider>

                    </div>

                    <div className="p-grid p-fluid">
                        <div>
                            <PlanRow id={1} showHeader='true'></PlanRow>
                            <PlanRow id={2}></PlanRow>
                            <PlanRow id={3}></PlanRow>
                        </div>

                    </div>

                   {/*  <div className="p-grid p-fluid">
                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <Button label="Search" />
                                <InputText placeholder="Keyword" />
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <InputText placeholder="Keyword" />
                                <Button icon="pi pi-search" className="p-button-warning" />
                            </div>
                        </div>

                        <div className="p-col-12 p-md-4">
                            <div className="p-inputgroup">
                                <Button icon="pi pi-check" className="p-button-success" />
                                <InputText placeholder="Vote" />
                                <Button icon="pi pi-times" className="p-button-danger" />
                            </div>
                        </div>
                    </div> */}

                    <div className="p-grid p-fluid">
                        <LineChart></LineChart>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainView;
