import React from 'react';
import './Header.css';

const Header = props => (
    <div className="header">
        <div className="row">
            <div className="col-lg-8">
                <div className="title">{props.children}</div>
            </div>
            <div className="col-md-4">
                <div className="scores">
                    Score: {props.score} Highscore: {props.highscore}
                </div>
            </div>
        </div>
    </div>
)

export default Header;