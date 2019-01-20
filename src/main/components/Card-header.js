import React, { Component } from 'react';
import './Card-header.css';
import { Button } from "primereact/button";

class CardHeader extends Component {
    constructor() {
        super()

        this.state={

        }
    }

    render() {
        return (
            <div>
                <header className="card-title">{this.props.title}
                    {/* <Button className="p-button-info" tooltip='help' style={{ marginRight: '3px', float: 'right', fontSize: '8px' }} icon="pi pi-info" /> */}
                    <i class="pi pi-question-circle info-button"></i>
                </header>
            </div>
        )
    }
}

export default CardHeader;