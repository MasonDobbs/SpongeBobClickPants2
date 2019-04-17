import React from 'react';
import './Card.css';

const Card = props => (
    <div>
        <div className="card" id={props.id} onClick={() => props.clicked(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    </div>
);

export default Card;