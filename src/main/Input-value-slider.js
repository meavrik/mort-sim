import React, { Component } from 'react';
import './Input-value-slider.css';
import { Slider } from 'primereact/slider';
import { InputText } from "primereact/inputtext";

class InputValueSlider extends Component {
    constructor() {
        super();
        this.state = {
            amount: 0
        }

        this.onChangeSlider = this.onChangeSlider.bind(this);
    }

    componentDidMount() {
        this.setState({ amount: this.props.minValue });
    }

    onChangeSlider(e) {
        var newValue;
        if (e.target && e.target.nodeName === "INPUT") {
            newValue = e.target.value;
        }
        else {
            newValue = e.value;
        }

        this.setState({ amount: newValue });
    }

    render() {
        
        return (

            <div className="p-col-12 p-md-4">

                <div className="p-inputgroup">

                    <div>
                        <b className="a-title">{this.props.title}</b>
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">$</span>

                            <InputText value={this.state.amount.toLocaleString()} placeholder="mortgage amount" onChange={this.onChangeSlider} />
                            <span className="p-inputgroup-addon">.00</span>
                        </div>

                        <span className="slider-container">
                            <p>{this.props.minValue.toLocaleString()}</p>
                            <Slider value={this.state.amount} max={this.props.maxValue} min={this.props.minValue} onChange={this.onChangeSlider} style={{ width: '14em' }} />
                            <p>{this.props.maxValue.toLocaleString()}</p>
                        </span>

                    </div>

                </div>

            </div>)

            
    }



    
}


export default InputValueSlider;
