import React, { Component } from 'react';
import './Win.css'
import App from '../../App';
class Win extends Component {
    state = {
        win: true
    };

    reRender = () => {
        this.setState({
            win: false
        })
    }

    render() {
        if (this.state.win === false) {
            return <App />
        } else {
            return (
                <div>
                    <h1 className="wonGame">Congratulations, You have a decent memory!</h1>
                    <button onClick={this.reRender} className="btn">Play Again</button>
                </div >
            )
        }
    }
};

export default Win;