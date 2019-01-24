import React, { Component } from 'react';
import './Card-header.css';

const CardHeader = (props) => {
    return (
        <div>
            <header className="card-title">{props.title}
                {/* <Button className="p-button-info" tooltip='help' style={{ marginRight: '3px', float: 'right', fontSize: '8px' }} icon="pi pi-info" /> */}
                <i className="pi pi-question-circle info-button"></i>
            </header>
        </div>
    )

}

export default CardHeader;